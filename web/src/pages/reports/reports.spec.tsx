import * as RTL from '@redwoodjs/testing/web'

import { Reports } from '.'

describe('Reports page', () => {
  it('renders successfully', () => {
    RTL.render(<Reports />)

    RTL.screen.getByText('Reportes')
    RTL.screen.getByText(/contenido de reportes/i)
  })
})
