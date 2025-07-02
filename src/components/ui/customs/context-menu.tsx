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
};

export function ContextMenuComponent({ children }: Props) {
  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent className='w-52'>
        <ContextMenuItem inset>
          Nueva carpeta
          <ContextMenuShortcut>
            <Folder />
          </ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset>
          Subir archivo
          <ContextMenuShortcut>
            <File />
          </ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset>
          Descargar archivo
          <ContextMenuShortcut>
            <Download />
          </ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset>
          Eliminar
          <ContextMenuShortcut>
            <Trash />
          </ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
