import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

//Import all required component
import { View, StyleSheet, Text, Alert, AsyncStorage } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';

export default function CustomSidebarMenu(props) {
  const user = useSelector(state => state.authentication.user);
  let items = [
    {
      navOptionName: 'Home Screen',
      screenToNavigate: 'Home',
    },
    {
      navOptionName: 'Notifications Screen',
      screenToNavigate: 'Notifications',
    },
    {
      navOptionName: 'Logout',
      screenToNavigate: 'Logout',
    },
  ];

  const handleClick = (index, screenToNavigate) => {
    if (screenToNavigate == 'Logout') {
      props.navigation.toggleDrawer();
      Alert.alert(
        'Logout',
        'Are you sure? You want to logout?',
        [
          {
            text: 'Cancel',
            onPress: () => {
              return null;
            },
          },
          {
            text: 'Confirm',
            onPress: () => {
            //   AsyncStorage.clear();
              props.navigation.navigate('Login');
              console.log('Logout');
            },
          },
        ],
        { cancelable: false }
      );
    } else {
      props.navigation.toggleDrawer();
      global.currentScreenIndex = screenToNavigate;
      props.navigation.navigate(screenToNavigate);
    }
  };
  console.log(user.username)
  return (
    <View style={stylesSidebar.sideMenuContainer}>
      <View style={stylesSidebar.profileHeader}>
        <View style={stylesSidebar.profileHeaderPicCircle}>
          <Text style={{ fontSize: 25, color: '#307ecc' }}>
            {user.username.toUpperCase().charAt(0)}
          </Text>
        </View>
        {/* <Text style={stylesSidebar.profileHeaderText}>Demo App</Text> */}
        <Text style={stylesSidebar.profileHeaderText}>{`${user.username}`}</Text>
      </View>
      <View style={stylesSidebar.profileHeaderLine} />
      <View style={{ width: '100%', flex: 1 }}>
        {items.map((item, key) => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 20,
              color: 'white',
              backgroundColor:
                global.currentScreenIndex === item.screenToNavigate
                  ? '#4b9ff2'
                  : '#307ecc',
            }}
            key={key}
            onStartShouldSetResponder={() =>
              handleClick(key, item.screenToNavigate)
            }>
            <Text style={{ fontSize: 15, color: 'white' }}>
              {item.navOptionName}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const stylesSidebar = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#307ecc',
    paddingTop: 40,
    color: 'white',
  },
  profileHeader: {
    flexDirection: 'row',
    backgroundColor: '#307ecc',
    padding: 15,
    textAlign: 'center',
  },
  profileHeaderPicCircle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    color: 'white',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileHeaderText: {
    color: 'white',
    alignSelf: 'center',
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
  profileHeaderLine: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: '#e2e2e2',
    marginTop: 15,
    marginBottom: 10,
  },
});