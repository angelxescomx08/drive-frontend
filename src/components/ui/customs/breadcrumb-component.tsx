import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { Fragment, useState } from 'react';
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
  onClick: (id: string, path: string) => void;
};

export const BreadcrumbComponent = ({
  paths,
  ids,
  itemsToDisplay,
  onClick,
}: Props) => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  // if (paths.length === 0 && ids.length === 0) return null;

  console.log({
    paths,
    ids,
  });

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href='/home' asChild>
            <Button variant='ghost' onClick={() => onClick(ids[0], paths[0])}>
              {paths[0]}
            </Button>
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
                        <Button
                          onClick={() => onClick(ids[index + 1], path)}
                          variant='ghost'
                        >
                          {path}
                        </Button>
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
                        <Button
                          key={index}
                          onClick={() => onClick(ids[index + 1], path)}
                          variant='ghost'
                          className='py-1 text-sm'
                        >
                          {path}
                        </Button>
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
          <Fragment key={index}>
            <BreadcrumbItem>
              {item ? (
                <>
                  <BreadcrumbLink
                    asChild
                    className='max-w-20 truncate md:max-w-none'
                  >
                    <Button
                      onClick={() => onClick(ids[index + 1], item)}
                      variant='ghost'
                    >
                      {item}
                    </Button>
                  </BreadcrumbLink>
                </>
              ) : (
                <BreadcrumbPage className='max-w-20 truncate md:max-w-none'>
                  {item}
                </BreadcrumbPage>
              )}
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
