import type { StoryObj } from '@storybook/react'

import { HomePage } from './home-page'

export default {
  component: HomePage,
  title: 'Home',
}

export const Default: StoryObj<typeof HomePage> = {
  render: () => <HomePage />,
}
