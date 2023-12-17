import * as RTL from '@redwoodjs/testing/web'

import { Patterns } from '.'

describe('Patterns page', () => {
  it('renders successfully', () => {
    RTL.render(<Patterns />)

    RTL.screen.getByText('Patrones')
    RTL.screen.getByText(/contenido de patrones/i)
  })
})
