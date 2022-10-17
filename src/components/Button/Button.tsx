import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export const Button: React.FC<IButtonProps> = ({ asChild, children, className, ...rest }) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp 
      {...rest}
      className={clsx(
        `py-3 
        px-4 
        bg-cyan-500 
        rounded 
        font-semibold 
        text-black 
        text-sm 
        w-full 
        transition-colors 
        hover:bg-cyan-300 
        focus:ring-2 
        ring-white
      `, className)}>
      {children}
    </Comp>
  );
}