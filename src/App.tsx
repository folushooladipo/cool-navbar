import React from 'react'

import './App.css'
import { MainContent, Navbar} from './components'

export interface IAppState {
  currentRoute: KnownRoute
  navbarToggleCount: number
  shouldShowNavbar: boolean
}

class App extends React.Component<{}, IAppState> {
  constructor(props) {
    super(props)

    this.setCurrentRoute = this.setCurrentRoute.bind(this)
    this.toggleNavbarVisibility = this.toggleNavbarVisibility.bind(this)

    this.state = {
      currentRoute: 'start',
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

  setCurrentRoute(currentRoute: KnownRoute) {
    this.setState({
      currentRoute,
      navbarToggleCount: this.state.navbarToggleCount + 1,
      shouldShowNavbar: false
    })
  }

  render() {
    const {
      currentRoute,
      navbarToggleCount,
      shouldShowNavbar
    } = this.state
    const innerContainerCssClasses = `inner-app-container${
      shouldShowNavbar ? ' visible-navbar' : ''}${
      navbarToggleCount > 0 ? ' has-once-toggled-navbar' : ''
    }`

    return (
      <div className="app-container">
        <div className={ innerContainerCssClasses }>
          <Navbar
            currentRoute={ currentRoute }
            setCurrentRoute={ this.setCurrentRoute }
          />
          <MainContent
            currentRoute={ currentRoute }
            toggleNavbarVisibility={ this.toggleNavbarVisibility }
          />
        </div>
      </div>
    )
  }
}

export default App
