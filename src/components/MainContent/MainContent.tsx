import React from 'react'
import { MdMenu } from 'react-icons/md'

export interface IMainContentProps {
  className?: string
  toggleNavbarVisibility: () => void
}

export default class MainContent extends React.Component<IMainContentProps> {
  render() {
    const { className, toggleNavbarVisibility } = this.props
    const containerCssClasses = className
      ? `main-container ${ className }`
      : "main-container"

    return (
      <main
        className={ containerCssClasses }
        onClick={ () => toggleNavbarVisibility() }
      >
        <MdMenu />
        Start
      </main>
    )
  }
}
