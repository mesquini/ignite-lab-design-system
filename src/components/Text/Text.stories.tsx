import { Meta, StoryObj } from '@storybook/react'
import { Text, ITextProps } from './Text'

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum.',
    size: 'sm',
  }
} as Meta<ITextProps>

export const Default: StoryObj<ITextProps> = {}

export const Small: StoryObj<ITextProps> = {
  args: {
    size: 'sm'
  }
}

export const Large: StoryObj<ITextProps> = {
  args: {
    size: 'lg'
  }
}

export const CustomComponent: StoryObj<ITextProps> = {
  args: {
    asChild: true,
    children: (
      <p>Lorem Ipsum tag p</p>
    ), 
  }  , 
  argTypes: {
    children: {
      table: {
        disable: true,
      }
    },
    asChild: {
      table: {
        disable: true,
      }
    }
  }
}