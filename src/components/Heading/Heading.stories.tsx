import { Meta, StoryObj } from '@storybook/react'
import { Heading, IHeadingProps } from './Heading'

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Lorem ipsum.',
    size: 'lg',
  }
} as Meta<IHeadingProps>

export const Default: StoryObj<IHeadingProps> = {}

export const Large: StoryObj<IHeadingProps> = {
  args: {
    size: 'lg'
  }
}

export const LargeXl: StoryObj<IHeadingProps> = {
  args: {
    size: 'xl'
  }
}

export const CustomComponent: StoryObj<IHeadingProps> = {
  args: {
    asChild: true,
    children: (
      <h1>Lorem Ipsum tag h1</h1>
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