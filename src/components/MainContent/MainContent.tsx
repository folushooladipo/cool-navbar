import React from 'react'
import { FaBars } from 'react-icons/fa'

import './MainContent.css'

export interface IMainContentProps {
  className?: string
  currentRoute: KnownRoute
  toggleNavbarVisibility: () => void
}

export const MAP_OF_ROUTES: IRoutesMap = {
  'start': 'START',
  'your-cart': 'YOUR CART',
  'favourites': 'FAVOURITES',
  'your-orders': 'YOUR ORDERS'
}

export default class MainContent extends React.Component<IMainContentProps> {
  render() {
    const { className, currentRoute, toggleNavbarVisibility } = this.props
    const containerCssClasses = className
      ? `main-container ${ className }`
      : 'main-container'

    return (
      <main className={ containerCssClasses }>
        <div
          className="menu-opener"
          onClick={ () => toggleNavbarVisibility() }
        >
          <FaBars size="2em" className="opener-icon" />
          <span className="opener-text">
            { MAP_OF_ROUTES[currentRoute] }
          </span>
        </div>
      </main>
    )
  }
}
