import React from 'react';
import RootProvider from './providers/RootProvider';
import HomeContainer from './screens/Home/HomeContainer';

const AppBuilder = () => {
  return (
    <RootProvider>
      <HomeContainer />
    </RootProvider>
  );
};

export default AppBuilder;
