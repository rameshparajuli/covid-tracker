import React from 'react';
import {View, Text} from 'react-native';
import {HomePage, Swipeable, LoginPage} from '../../screens';
import SwipeableMoreItems from '../../components/swipeable-more-items/swipeable-more-items-component';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

const isLoggedIn = false;

function SwitchNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {isLoggedIn ? (
        <>
          <Stack.Screen name="Home" component={HomePage} />
        </>
      ) : (
        <>
          <Stack.Screen name="FewMore" component={SwipeableMoreItems} />
          <Stack.Screen name="Swipable" component={Swipeable} />
          <Stack.Screen name="SignIn" component={LoginPage} />
        </>
      )}
    </Stack.Navigator>
  );
}

export default SwitchNav;
