import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import { Text } from "react-native";
import { Provider } from "react-redux";
import store from "./redux/store/store";

import { Login, Landing } from "./screens";

const Home = createStackNavigator();

export default function App() {
  const [signedIn] = useState(false);

  const HomeStack = () => (
    <Home.Navigator screenOptions={{
      headerShown: false,
      gestureEnabled: true,
      gestureDirection: "horizontal",
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
    }}
    >
      <Home.Screen name="Home" component={Landing} />
      <Home.Screen name="Login" component={Login} />
    </Home.Navigator>
  );

  return (
    <Provider store={store}>
      {console.log(store.getState())}
      <NavigationContainer>
        { signedIn ? <Text>Overview Component</Text> : <HomeStack />}
      </NavigationContainer>
    </Provider>
  );
}
