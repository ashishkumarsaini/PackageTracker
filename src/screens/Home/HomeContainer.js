import React from 'react';
import { ScrollView } from 'react-native';
import ShippingMethods from '../../components/ShippingMethods/ShippingMethods';
import HomeHeader from './partials/HomeHeader/HomeHeader';
import PreviousShippment from './partials/PreviousShippment/PreviousShippment';

const HomeContainer = () => {
  return (
    <ScrollView>
        <HomeHeader />
        <PreviousShippment />
        <ShippingMethods />
    </ScrollView>
  );
};

export default HomeContainer;
