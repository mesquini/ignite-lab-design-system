import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ITextProps {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean
}

export const Text: React.FC<ITextProps> = ({ asChild, size = 'md', children }) => {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp 
      className={clsx('text-gray-100 font-sans', {
        'text-xs': size === 'sm',
        'text-md': size === 'md',
        'text-lg': size === 'lg'
      }
    )}>
      {children}
    </Comp>
  );
}