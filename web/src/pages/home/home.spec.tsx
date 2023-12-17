import * as RTL from '@redwoodjs/testing/web'

import { Home } from '.'

describe('Home page', () => {
  it('renders successfully', () => {
    RTL.render(<Home />)

    RTL.screen.getByText(/welcome to my app/i)
    RTL.screen.getByText(
      /This is a simple example of how to add content to your app./i
    )
  })
})
