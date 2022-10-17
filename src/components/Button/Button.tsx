import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean
}

export const Button: React.FC<IButtonProps> = ({ asChild, children, ...rest }) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp 
      {...rest}
      className={
        `py-4 
        px-3 
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
      `}>
      {children}
    </Comp>
  );
}