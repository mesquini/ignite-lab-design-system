import { InputHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface ITextInputRootProps {
  children: ReactNode;
}

function TextInputRoot({ children }: ITextInputRootProps)  {
  return (
    <div
    className={clsx(
      'flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300'
      )
    }
    >
      {children}
    </div>
  );
}

TextInputRoot.displayName = 'TextInput.Root'

export interface ITextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput({...rest}: ITextInputInputProps) {
  return (
    <input 
      {...rest}
      className="bg-gray-800 flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
    />
  )
}

TextInputInput.displayName = 'TextInput.Input'

export interface ITextInputIconProps {
  children: ReactNode;
}

function TextInputIcon({ children }: ITextInputIconProps) {
  return (
    <Slot className="w-6 h-6 text-gray-400">
      {children}
    </Slot>
  )
}

TextInputIcon.displayName = 'TextInput.Icon'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
}