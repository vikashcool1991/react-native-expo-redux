import * as React from "react";
import { View, Button } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import NavigationDrawerHeader from "../components/DrawerHeader";
import LogoutHeader from "../components/LogoutHeader";
import CustomSidebarMenu from "../components/CustomSidebarMenu";
import { useDispatch, useSelector } from 'react-redux';

const Stack = createStackNavigator();
const Stack2 = createStackNavigator();

function HomeScreen({ navigation }) {
  // const user = useSelector(state => state.authentication.user);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={() => (
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Button
              onPress={() => navigation.navigate("Notifications")}
              title="Go to notifications"
            />
          </View>
        )}
        options={({ navigation }) => ({
          title: "Home Screen",
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerRight: () => (
            <LogoutHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#307ecc",
          },
          headerTintColor: "#fff",
        })}
      />
    </Stack.Navigator>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <Stack2.Navigator>
      <Stack2.Screen
        name="Notifications"
        component={() => (
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Button onPress={() => navigation.goBack()} title="Go back home" />
          </View>
        )}
        options={({ navigation }) => ({
          title: "Notifications",
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerRight: () => (
            <LogoutHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#307ecc",
          },
          headerTintColor: "#fff",
        })}
      />
    </Stack2.Navigator>
  );
}

const Drawer = createDrawerNavigator();

export default function HomeNav() {
  return (
    <Drawer.Navigator
      drawerType="slide"
      initialRouteName="Home"
      drawerStyle={{
        backgroundColor: "#c6cbef",
        width: 240,
      }}
      drawerContent={(props)=>(<CustomSidebarMenu props={props}/>)}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
}
