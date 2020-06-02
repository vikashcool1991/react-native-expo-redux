import * as React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

export default function NavigationDrawerHeader(props) {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={toggleDrawer}>
        <Image
          source={require("../images/drawer.png")}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};
