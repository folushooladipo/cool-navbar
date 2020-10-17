import React from 'react'

import './Navbar.css'

export interface INavbarProps {
  currentRoute: KnownRoute
  setCurrentRoute: (currentRoute: KnownRoute) => void
}

export const LIST_OF_ROUTES: IRouteData[] = [
  { route: 'start', label: 'Start' },
  { route: 'your-cart', label: 'Your Cart' },
  { route: 'favourites', label: 'Favourites' },
  { route: 'your-orders', label: 'Your Orders' },
]

export default class Navbar extends React.Component<INavbarProps> {
  setRoute(route: KnownRoute) {
    this.props.setCurrentRoute(route)
  }

  renderIntraNavMenu(): React.ReactNode {
    const { currentRoute } = this.props
    const menuItems = LIST_OF_ROUTES.map(({ route, label }) => (
      <li
        key={ `intra-nav-${ route }` }
        className={
          route === currentRoute
            ? 'intra-nav-item current-route'
            : 'intra-nav-item'
        }
        onClick={ () => this.setRoute(route) }
      >
        { label }
      </li>
    ))

    return (
      <ul className="intra-app-nav-menu">
        { menuItems }
      </ul>
    )
  }

  render() {
    return (
      <nav className="navbar-container">
        <section className="navbar-inner-wrapper">
          <div className="user-profile-container">Viktor</div>
          { this.renderIntraNavMenu() }
          <div className="nav-divider" />
          <div className="sign-out-container">
            {/* TODO: Disable this before submitting your code. */}
            <button className="sign-out-btn">Sign Out</button>
          </div>
        </section>
      </nav>
    )
  }
}
