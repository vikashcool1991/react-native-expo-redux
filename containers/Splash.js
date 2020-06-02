import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../actions";

//Import all required component
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image,
  AsyncStorage,
} from "react-native";
// import AsyncStorage from '@react-native-community/async-storage';

const SplashScreen = (props) => {
  //State for ActivityIndicator animation
  let [animating, setAnimating] = React.useState(true);
  const loggingIn = useSelector((state) => state.authentication.loggingIn);
  const dispatch = useDispatch();

  React.useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
      AsyncStorage.getItem("user").then((value) => {
        const jsonValue = JSON.parse(value)
        dispatch(userActions.loadState(jsonValue));
        props.navigation.navigate(jsonValue ? "HomeNav" : "Login");
      });
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../images/logo.png")}
        style={{ width: "90%", resizeMode: "contain", margin: 30 }}
      />
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};
export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#307ecc",
  },
  activityIndicator: {
    alignItems: "center",
    height: 80,
  },
});
