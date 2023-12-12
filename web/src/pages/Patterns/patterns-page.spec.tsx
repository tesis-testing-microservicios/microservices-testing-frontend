import * as RTL from '@redwoodjs/testing/web'

import { PatternsPage } from './patterns-page'

describe('HomePage', () => {
  it('renders successfully', () => {
    RTL.render(<PatternsPage />)

    RTL.screen.getByText('Patrones')
    RTL.screen.getByText(/contenido de patrones/i)
  })
})
