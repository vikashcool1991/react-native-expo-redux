import * as React from "react";

//Import all required component
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from "react-native";
// import Loader from './components/Loader';

const RegisterScreen = (props) => {
  let [userName, setUserName] = React.useState("");
  let [userEmail, setUserEmail] = React.useState("");
  let [password, setPassword] = React.useState("");
  let [rePasword, setRePassword] = React.useState("");
  let [loading, setLoading] = React.useState(false);
  let [errortext, setErrortext] = React.useState("");
  let [isRegistraionSuccess, setIsRegistraionSuccess] = React.useState(false);

  const handleSubmitButton = () => {
    setErrortext("");
    // if (!userName) {
    //   alert("Please fill Name");
    //   return;
    // }
    // if (!userEmail) {
    //   alert("Please fill Email");
    //   return;
    // }
    // if (!password) {
    //   alert("Please fill Age");
    //   return;
    // }
    // if (!userAddress) {
    //   alert("Please fill Address");
    //   return;
    // }
    //Show Loader
    setLoading(true);
    var dataToSend = {
      user_name: userName,
      user_email: userEmail,
      user_pass: password,
      user_repassword: rePasword,
    };
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    setIsRegistraionSuccess(true);

    // fetch('https://aboutreact.herokuapp.com/register.php', {
    //   method: 'POST',
    //   body: formBody,
    //   headers: {
    //     //Header Defination
    //     'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    //   },
    // })
    //   .then(response => response.json())
    //   .then(responseJson => {
    //     //Hide Loader
    //     setLoading(false);
    //     console.log(responseJson);
    //     // If server response message same as Data Matched
    //     if (responseJson.status == 1) {
    //       setIsRegistraionSuccess(true);
    //       console.log('Registration Successful. Please Login to proceed');
    //     } else {
    //       setErrortext('Registration Unsuccessful');
    //     }
    //   })
    //   .catch(error => {
    //     //Hide Loader
    //     setLoading(false);
    //     console.error(error);
    //   });
  };
  if (isRegistraionSuccess) {
    return (
      <View style={styles.mainBody}>
        <Image
          source={require("../images/success.png")}
          style={styles.successImage}
        />
        <Text style={styles.successTextStyle}>Registration Successful.</Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => props.navigation.navigate("Login")}
        >
          <Text style={styles.buttonTextStyle}>Login Now</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={styles.mainBody}>
      {/* <Loader loading={loading} /> */}
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={{ alignItems: "center", marginTop: 100 }}>
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
        <KeyboardAvoidingView enabled>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserName) => setUserName(UserName)}
              underlineColorAndroid="#FFFFFF"
              placeholder="Enter Name"
              placeholderTextColor="#307ecc"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={
                () => {}
                // this._emailinput && this._emailinput.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserEmail) => setUserEmail(UserEmail)}
              underlineColorAndroid="#F6F6F7"
              placeholder="Enter Email"
              placeholderTextColor="#307ecc"
              keyboardType="email-address"
              ref={(ref) => {
                // this._emailinput = ref;
              }}
              returnKeyType="next"
              onSubmitEditing={() => {
                //   this._ageinput && this._ageinput.focus()
              }}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(Password) => setPassword(Password)}
              underlineColorAndroid="#F6F6F7"
              placeholder="Enter Password"
              placeholderTextColor="#307ecc"
              keyboardType="default"
              ref={(ref) => {
                // this._ageinput = ref;
              }}
              onSubmitEditing={
                () => {}
                // this._addressinput && this._addressinput.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(RePassword) => setRePassword(RePassword)}
              underlineColorAndroid="#FFFFFF"
              placeholder="Re-enter Password"
              placeholderTextColor="#307ecc"
              autoCapitalize="sentences"
              ref={(ref) => {
                // this._addressinput = ref;
              }}
              returnKeyType="next"
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
            />
          </View>
          {errortext != "" ? (
            <Text style={styles.errorTextStyle}> {errortext} </Text>
          ) : null}
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={handleSubmitButton}
          >
            <Text style={styles.buttonTextStyle}>REGISTER</Text>
          </TouchableOpacity>
          <Text
            style={styles.registerTextStyle}
            onPress={() => props.navigation.navigate("Login")}
          >
            Already have an account ? Login
          </Text>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default RegisterScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
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
    color: "#307ecc",
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
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },
  successTextStyle: {
    color: "#307ecc",
    textAlign: "center",
    fontSize: 18,
    padding: 30,
  },
  registerTextStyle: {
    color: "#307ecc",
    // color: "#307ecc",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
  },
  successImage: { height: 150, resizeMode: "contain" },
});
