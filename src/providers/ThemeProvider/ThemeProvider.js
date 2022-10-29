import React from 'react';
import { NativeBaseProvider } from 'native-base';

const ThemeProvider = ({children}) => {
//   const newColorTheme = {
//     appPrimary: {
//       500: '#6FCF43',
//     },
//     appSecondary: {
//         500: '#2D2B2A'
//     },

//   };
//   const theme = extendTheme({colors: newColorTheme});

  return <NativeBaseProvider>{children}</NativeBaseProvider>;
};

export default ThemeProvider;
