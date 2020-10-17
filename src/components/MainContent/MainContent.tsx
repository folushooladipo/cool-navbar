import React from 'react'
import { MdMenu } from 'react-icons/md'

export interface IMainContentProps {
  className?: string
  currentRoute: KnownRoute
  toggleNavbarVisibility: () => void
}

export const MAP_OF_ROUTES: IRoutesMap = {
  'start': 'Start',
  'your-cart': 'Your Cart',
  'favourites': 'Favourites',
  'your-orders': 'Your Orders',
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
          <MdMenu />
          { MAP_OF_ROUTES[currentRoute] }
        </div>
      </main>
    )
  }
}
