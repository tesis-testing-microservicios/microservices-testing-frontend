import * as RTL from '@redwoodjs/testing/web'

import { Tests } from '.'

describe('Tests page', () => {
  it('renders successfully', () => {
    RTL.render(<Tests />)

    RTL.screen.getByText('Tests')
    RTL.screen.getByText(/contenido de tests/i)
  })
})
