import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useState } from 'react';
import { Link } from 'react-router';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../dropdown-menu';
import { BreadcrumbEllipsis } from '../breadcrumb';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../drawer';
import { Button } from '../button';

type Props = {
  paths: string[];
  ids: string[];
  itemsToDisplay: number;
};

export const BreadcrumbComponent = ({ paths, ids, itemsToDisplay }: Props) => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (paths.length === 0 && ids.length === 0) return null;

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href='/home' asChild>
            <Link to={`/home?id_folder=${ids[0]}`}>{paths[0]}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {paths.length > itemsToDisplay ? (
          <>
            <BreadcrumbItem>
              {isDesktop ? (
                <DropdownMenu open={open} onOpenChange={setOpen}>
                  <DropdownMenuTrigger
                    className='flex items-center gap-1'
                    aria-label='Toggle menu'
                  >
                    <BreadcrumbEllipsis className='size-4' />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align='start'>
                    {paths.slice(1, paths.length - 1).map((path, index) => (
                      <DropdownMenuItem key={index}>
                        <Link to={`/home?id_folder=${ids[index + 1]}`}>
                          {path}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Drawer open={open} onOpenChange={setOpen}>
                  <DrawerTrigger aria-label='Toggle Menu'>
                    <BreadcrumbEllipsis className='h-4 w-4' />
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader className='text-left'>
                      <DrawerTitle>Navegar a</DrawerTitle>
                      <DrawerDescription>
                        Selecciona una página para navegar.
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className='grid gap-1 px-4'>
                      {paths.slice(1, -2).map((path, index) => (
                        <Link
                          key={index}
                          to={`/home?id_folder=${ids[index + 1]}`}
                          className='py-1 text-sm'
                        >
                          {path}
                        </Link>
                      ))}
                    </div>
                    <DrawerFooter className='pt-4'>
                      <DrawerClose asChild>
                        <Button variant='outline'>Cerrar</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              )}
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        ) : null}
        {paths.slice(-itemsToDisplay + 1).map((item, index) => (
          <BreadcrumbItem key={index}>
            {item ? (
              <>
                <BreadcrumbLink
                  asChild
                  className='max-w-20 truncate md:max-w-none'
                >
                  <Link to={`/home?id_folder=${ids[index + 1]}`}>{item}</Link>
                </BreadcrumbLink>
                <BreadcrumbSeparator />
              </>
            ) : (
              <BreadcrumbPage className='max-w-20 truncate md:max-w-none'>
                {item}
              </BreadcrumbPage>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
