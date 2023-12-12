import * as RTL from '@redwoodjs/testing/web'

import { HomePage } from './home-page'

describe('HomePage', () => {
  it('renders successfully', () => {
    RTL.render(<HomePage />)

    RTL.screen.getByText(/welcome to my app/i)
    RTL.screen.getByText(
      /This is a simple example of how to add content to your app./i
    )
  })
})
