import * as RTL from '@redwoodjs/testing/web'

import { Implementations } from '.'

describe('Implementations page', () => {
  it('renders successfully', () => {
    RTL.render(<Implementations />)

    RTL.screen.getByText('Implementaciones')
    RTL.screen.getByText(/contenido de implementaciones 2/i)
  })
})
