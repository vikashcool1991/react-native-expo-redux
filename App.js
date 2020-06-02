import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./containers/Login";
import SplashScreen from "./containers/Splash";
import RegisterScreen from "./containers/Register";
import HomeNav from "./containers/Home";
import store from "./store";
import { Provider } from "react-redux";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" headerMode="none">
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="HomeNav" component={HomeNav} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
