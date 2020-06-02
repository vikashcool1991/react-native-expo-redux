import * as React from "react";
import { useDispatch, useSelector } from 'react-redux';
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import Loader from "../components/Loader";
import { userActions } from '../actions';

export default function LoginScreen(props) {
  let [userEmail, setUserEmail] = React.useState("");
  let [userPassword, setUserPassword] = React.useState("");
  let [loading, setLoading] = React.useState(false);
  let [errortext, setErrortext] = React.useState("");
  const dispatch = useDispatch();

  const handleSubmitPress = () => {
    setErrortext("");
    if (!userEmail || !userPassword) {
      setErrortext("Please fill Email and Password");
      return;
    }
    setLoading(true);
    var dataToSend = { user_email: userEmail, user_password: userPassword };
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    dispatch(userActions.login(userEmail, userPassword, props.navigation))
    // fetch("https://aboutreact.herokuapp.com/login.php", {
    //   method: "POST",
    //   body: formBody,
    //   headers: {
    //     //Header Defination
    //     "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     //Hide Loader
    //     setLoading(false);
    //     console.log(responseJson);
    //     // If server response message same as Data Matched
    //     if (responseJson.status == 1) {
    //       AsyncStorage.setItem("user_id", responseJson.data[0].user_id);
    //       console.log(responseJson.data[0].user_id);
    //       props.navigation.navigate("DrawerNavigationRoutes");
    //     } else {
    //       setErrortext("Please check your email id or password");
    //       console.log("Please check your email id or password");
    //     }
    //   })
    //   .catch((error) => {
    //     //Hide Loader
    //     setLoading(false);
    //     console.error(error);
    //   });
  };

  return (
    <View style={styles.mainBody}>
      {/* <Loader loading={loading} /> */}
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={{ marginTop: 100 }}>
          <KeyboardAvoidingView enabled>
            <View style={{ alignItems: "center" }}>
              <Image
                source={require("../images/logo.png")}
                style={{
                  width: "50%",
                  height: 100,
                  resizeMode: "contain",
                  margin: 30,
                }}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserEmail) => setUserEmail(UserEmail)}
                // underlineColorAndroid="#FFFFFF"
                placeholder="Enter Email" //dummy@abc.com
                placeholderTextColor="#307ecc"
                autoCapitalize="sentences"
                keyboardType="email-address"
                ref={(ref) => {
                  // this._emailinput = ref;
                }}
                returnKeyType="next"
                onSubmitEditing={() =>
                  this._passwordinput && this._passwordinput.focus()
                }
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserPassword) => setUserPassword(UserPassword)}
                // underlineColorAndroid="#FFFFFF"
                placeholder="Enter Password" //12345
                placeholderTextColor="#307ecc"
                keyboardType="default"
                ref={(ref) => {
                  // this._passwordinput = ref;
                }}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
              />
            </View>
            {errortext != "" ? (
              <Text style={styles.errorTextStyle}> {errortext} </Text>
            ) : null}
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}
            >
              <Text style={styles.buttonTextStyle}>LOGIN</Text>
            </TouchableOpacity>
            <Text
              style={styles.registerTextStyle}
              onPress={() => props.navigation.navigate("Register")}
            >
              New Here ? Register
            </Text>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};

// export default LoginScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    // backgroundColor: "#307ecc",
  },
  SectionStyle: {
    flexDirection: "row",
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: "#307ecc",
    borderWidth: 0,
    // color: "#307ecc",
    borderColor: "#307ecc",
    height: 40,
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: "#fff",
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: "#307ecc",
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#307ecc",
  },
  registerTextStyle: {
    color: "#307ecc",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
  },
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },
});
