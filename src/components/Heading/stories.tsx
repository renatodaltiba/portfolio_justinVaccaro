import { Meta, Story } from '@storybook/react'
import Heading, { HeadingProps } from '.'

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Hello World'
  }
} as Meta

export const Default: Story<HeadingProps> = (args) => <Heading {...args} />
