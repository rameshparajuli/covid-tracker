import React from 'react';
import {View, Text} from 'react-native';
import {HomePage, Swipeable, LoginPage} from '../../screens';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator;

const isLoggedIn = true;

function SwitchNav() {
  return isLoggedIn ? (
    // <Stack.Screen name="Home" component={HomePage} />
    // <Stack.Screen name="Swipable" component={Swipeable} />
    <Swipeable />
  ) : (
    // <Stack.Screen name="SignIn" component={LoginPage} />
    <View>
      <Text>Login Page</Text>
    </View>
  );
}

export default SwitchNav;
