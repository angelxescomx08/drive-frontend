import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import { ContextMenuComponent } from '../../components/ui/customs/context-menu';
import { Dropzone } from '../../components/ui/customs/dropzone';
import { Header } from '../../components/ui/customs/header';
import { useAuthStore } from '../../modules/auth/hooks/useAuthStore';
import { FileComponent } from '../../modules/files/components/FileComponent';
import { useCreateFile } from '../../modules/files/hooks/useCreateFile';
import { FolderComponent } from '../../modules/folders/components/FolderComponent';
import { useCreateFolder } from '../../modules/folders/hooks/useCreateFolder';
import { useFolderContent } from '../../modules/folders/hooks/useFolderContent';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from '@/components/ui/breadcrumb';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { SlashIcon } from 'lucide-react';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const idFolder = searchParams.get('id_folder');
  const [currentFolder, setCurrentFolder] = useState<string>(
    idFolder ?? 'root'
  );
  const [open, setOpen] = useState(false);
  const isLargeScreen = useMediaQuery('(min-width: 768px)');

  const { folderContent } = useFolderContent(currentFolder);
  const { createFolderMutation } = useCreateFolder();
  const { createFileMutation } = useCreateFile();
  const { user } = useAuthStore();

  const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer && event.dataTransfer.items) {
      for (let i = 0; i < event.dataTransfer.items.length; i++) {
        const item = event.dataTransfer.items[i];
        if (item.webkitGetAsEntry) {
          const entry = item.webkitGetAsEntry();
          if (entry?.isDirectory) {
            createFolderMutation.mutate({
              folder_name: entry?.name ?? '',
              id_parent: currentFolder,
              id_user: user?.id_user ?? '',
            });
          }
          if (entry?.isFile) {
            const file = await new Promise<File>(resolve => {
              (entry as FileSystemFileEntry).file(file => resolve(file));
            });
            createFileMutation.mutate({
              file_name: entry?.name ?? '',
              id_folder: currentFolder,
              file,
            });
          }
        }
      }
    }
  };

  const breadcrumbItems = useMemo(() => {
    const paths = folderContent.data?.paths?.path.split('/');
    const ids = folderContent.data?.paths?.ids.split('/');

    if (!paths || !ids) {
      return (
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to='/home'>Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
      );
    }

    const items = [];

    if (isLargeScreen || paths.length <= 3) {
      for (let index = 0; index < paths.length; index++) {
        items.push(
          <BreadcrumbItem key={ids[index]}>
            <BreadcrumbLink asChild>
              <Link to={`/home?id_folder=${ids[index]}`}>{paths[index]}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        );

        if (index < paths.length - 1) {
          items.push(
            <BreadcrumbSeparator key={`sep-${index}`}>
              <SlashIcon />
            </BreadcrumbSeparator>
          );
        }
      }
    } else {
      // Primer elemento
      items.push(
        <BreadcrumbItem key={ids[0]}>
          <BreadcrumbLink asChild>
            <Link to={`/home?id_folder=${ids[0]}`}>{paths[0]}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
      );

      items.push(
        <BreadcrumbSeparator key='sep-0'>
          <SlashIcon />
        </BreadcrumbSeparator>
      );

      // Drawer con middle items
      const middleItems = paths.slice(1, -1);
      const middleIds = ids.slice(1, -1);

      if (middleItems.length > 0) {
        items.push(
          <BreadcrumbItem key='drawer'>
            <Drawer open={open} onOpenChange={setOpen}>
              <DrawerTrigger asChild>
                <button
                  className='flex items-center gap-1'
                  aria-label='Toggle drawer'
                >
                  <BreadcrumbEllipsis className='size-4' />
                </button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Carpetas intermedias</DrawerTitle>
                </DrawerHeader>
                <div className='flex flex-col gap-2 p-4'>
                  {middleItems.map((item, index) => (
                    <Link
                      key={middleIds[index]}
                      to={`/home?id_folder=${middleIds[index]}`}
                      className='text-sm font-medium hover:underline'
                      onClick={() => {
                        setCurrentFolder(middleIds[index]);
                        setSearchParams({ id_folder: middleIds[index] });
                        setOpen(false);
                      }}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </DrawerContent>
            </Drawer>
          </BreadcrumbItem>
        );

        items.push(
          <BreadcrumbSeparator key='sep-drawer'>
            <SlashIcon />
          </BreadcrumbSeparator>
        );
      }

      // Último elemento
      const lastIndex = paths.length - 1;
      items.push(
        <BreadcrumbItem key={ids[lastIndex]}>
          <BreadcrumbLink asChild>
            <Link to={`/home?id_folder=${ids[lastIndex]}`}>
              {paths[lastIndex]}
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
      );
    }

    return items;
  }, [folderContent, open, setSearchParams, isLargeScreen, setCurrentFolder]);

  return (
    <>
      <Header />
      <Breadcrumb>
        <BreadcrumbList>{breadcrumbItems}</BreadcrumbList>
      </Breadcrumb>
      <main className='container mx-auto'>
        <ContextMenuComponent>
          <div className='flex gap-4 mt-4'>
            <Dropzone onDrop={handleDrop}>
              {folderContent.data.folders.map(folder => (
                <FolderComponent
                  key={folder.id_folder}
                  folder={folder}
                  onClick={() => {
                    setCurrentFolder(folder.id_folder);
                    setSearchParams({ id_folder: folder.id_folder });
                  }}
                />
              ))}
              {folderContent.data.files.map(file => (
                <FileComponent key={file.id_file} file={file} />
              ))}
            </Dropzone>
          </div>
        </ContextMenuComponent>
      </main>
    </>
  );
};
