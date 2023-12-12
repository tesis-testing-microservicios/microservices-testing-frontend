import * as RTL from '@redwoodjs/testing/web'

import { Navbar } from './navbar'

describe('HomePage', () => {
  it('renders successfully', () => {
    RTL.render(<Navbar />)

    RTL.screen.getByText(/Componentes/i)
  })
})
