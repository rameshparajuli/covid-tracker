import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import SwitchNav from './routers/switchNav';

const Covid = () => {
  return (
    <NavigationContainer>
      <SwitchNav />
    </NavigationContainer>
  );
};

export default Covid;

const styles = StyleSheet.create({});
