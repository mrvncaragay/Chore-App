import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../Home';
import Overview from '../Overview';

const Navigation = () => (
  <NavigationContainer>
    {/* <Home /> */}
    <Overview />
  </NavigationContainer>
);


export default Navigation;
