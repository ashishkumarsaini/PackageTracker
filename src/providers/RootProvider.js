import React from 'react';
import ThemeProvider from './ThemeProvider/ThemeProvider'

const RootProvider = ({children}) => {
  return (
    <ThemeProvider>{children}</ThemeProvider>
  )
}

export default RootProvider