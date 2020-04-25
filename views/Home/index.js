import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

// components
import { Landing } from './components';

const HomeStack = createStackNavigator();

const Home = () =>  (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={Landing} />
    </HomeStack.Navigator>
 )

export default Home;