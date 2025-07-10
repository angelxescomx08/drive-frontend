import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from '@/components/ui/context-menu';
import { Download, File, Folder, Trash } from 'lucide-react';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  onNewFolder?: () => void;
  onUploadFile?: () => void;
  onDownloadFile?: () => void;
  onDeleteFile?: () => void;
};

export function ContextMenuComponent({
  children,
  onNewFolder,
  onUploadFile,
  onDownloadFile,
  onDeleteFile,
}: Props) {
  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent className='w-52'>
        <ContextMenuItem inset onClick={onNewFolder}>
          Nueva carpeta
          <ContextMenuShortcut>
            <Folder />
          </ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset onClick={onUploadFile}>
          Subir archivo
          <ContextMenuShortcut>
            <File />
          </ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset onClick={onDownloadFile}>
          Descargar archivo
          <ContextMenuShortcut>
            <Download />
          </ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset onClick={onDeleteFile}>
          Eliminar
          <ContextMenuShortcut>
            <Trash />
          </ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
