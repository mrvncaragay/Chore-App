import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

// components
import { Landing, Login } from './components';

const HomeStack = createStackNavigator();

const Home = () => (
  <HomeStack.Navigator screenOptions={{ 
    headerShown: false,
    gestureEnabled: true,
    gestureDirection: 'horizontal',
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
    }}>

    <HomeStack.Screen name='Home' component={Landing} />
    <HomeStack.Screen name='Login' component={Login} />
  </HomeStack.Navigator>
);

export default Home;
