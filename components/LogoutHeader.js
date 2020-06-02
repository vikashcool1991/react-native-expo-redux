import * as React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../actions';

export default function LogoutHeader(props) {
  const dispatch = useDispatch();

  const toggleDrawer = () => {
    dispatch(userActions.logout(props.navigationProps))
  };

  return (
    <View style={{ flexDirection: 'row',marginRight: 10}}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/* <Image
          source={require("../images/logout.png")}
          style={{ marginRight: 5 }}
        /> */}
        <FontAwesome name="sign-out" color="white" size={24} />
      </TouchableOpacity>
    </View>
  );
};
