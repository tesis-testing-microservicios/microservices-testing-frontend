// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

import { HomePage } from './pages/HomePage'
import { PatternsPage } from './pages/Patterns'

const Routes = () => {
  return (
    <Router>
      <Route notfound page={NotFoundPage} />
      <Route path="/" page={HomePage} name="home" />
      <Route path="/patrones" page={PatternsPage} name="patterns" />
    </Router>
  )
}

export default Routes
