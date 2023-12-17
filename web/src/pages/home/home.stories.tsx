import type { StoryObj } from '@storybook/react'

import { Home } from '.'

export default {
  component: Home,
  title: 'Home page',
}

export const Default: StoryObj<typeof Home> = {
  render: () => <Home />,
}
