import React from 'react'
import { MdMenu } from 'react-icons/md'

import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)

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
      <div className={containerCssClasses}>
        <nav className="navbar-container">Navbar</nav>
        <main
          className="main-container"
          onClick={() => this.toggleNavbarVisibility()}
        >
          <MdMenu />
          Start
        </main>
      </div>
    )
  }
}

export default App
