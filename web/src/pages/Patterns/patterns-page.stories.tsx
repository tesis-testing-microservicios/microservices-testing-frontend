import type { StoryObj } from '@storybook/react'

import { PatternsPage } from './patterns-page'

export default {
  component: PatternsPage,
  title: 'Patterns',
}

export const Default: StoryObj<typeof PatternsPage> = {
  render: () => <PatternsPage />,
}
