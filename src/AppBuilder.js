import React from 'react';
import {NativeBaseProvider, extendTheme} from 'native-base';
import HomeContainer from './screens/Home/HomeContainer';

const AppBuilder = () => {
  const newColorTheme = {
    appPrimary: {
      100: '#6FCF4E',
    },
    appSecondary: {
      100: '#2D282A',
    },
  };
  const theme = extendTheme({colors: newColorTheme});
  return (
    <NativeBaseProvider theme={theme}>
      <HomeContainer />
    </NativeBaseProvider>
  );
};

export default AppBuilder;
