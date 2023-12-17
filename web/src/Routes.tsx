// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

import { Home } from './pages/home'
import { Implementations } from './pages/implementations'
import { NotFound } from './pages/not-found'
import { Patterns } from './pages/patterns'

const Routes = () => {
  return (
    <Router>
      <Route notfound page={NotFound} />
      <Route path="/" page={Home} name="home" />
      <Route path="/patterns" page={Patterns} name="patterns" />
      <Route path="/implementations" page={Implementations} name="implementations" />
    </Router>
  )
}

export default Routes
