import React from 'react'

import './App.css'
import { MainContent , Navbar} from './components'

export interface IAppState {
  navbarToggleCount: number
  shouldShowNavbar: boolean
}

class App extends React.Component<{}, IAppState> {
  constructor(props) {
    super(props)

    this.toggleNavbarVisibility = this.toggleNavbarVisibility.bind(this)

    this.state = {
      navbarToggleCount: 0,
      shouldShowNavbar: false
    }
  }

  toggleNavbarVisibility() {
    const { navbarToggleCount, shouldShowNavbar } = this.state
    this.setState({
      navbarToggleCount: navbarToggleCount + 1,
      shouldShowNavbar: !shouldShowNavbar
    })
  }

  render() {
    const { navbarToggleCount, shouldShowNavbar } = this.state
    const containerCssClasses = `app-container${
      shouldShowNavbar ? " visible-navbar" : ""}${
      navbarToggleCount > 0 ? " has-once-toggled-navbar" : ""
    }`

    return (
      <div className={ containerCssClasses }>
        <Navbar />
        <MainContent
          toggleNavbarVisibility={ this.toggleNavbarVisibility }
        />
      </div>
    )
  }
}

export default App
