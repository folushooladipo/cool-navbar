import React from 'react'
import { render } from '@testing-library/react'

import App from './App'

test('renders the "START" text of the menu opener', () => {
  const { getByText } = render(<App />)
  const menuOpenerText = getByText(/START/)
  expect(menuOpenerText).toBeInTheDocument()
})
