import type { Meta, StoryObj } from '@storybook/react'

import { HomePage } from './home-page'

const meta: Meta = {
  component: HomePage,
  title: 'Home',
}

export default meta

export const Default: StoryObj<typeof HomePage> = {
  render: () => <HomePage />,
}
