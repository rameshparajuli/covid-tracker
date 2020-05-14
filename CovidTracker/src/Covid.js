import 'react-native-gesture-handler';
import React from 'react';

import {Provider} from 'react-redux';
import {store} from './redux/store';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import SwitchNav from './routers/switchNav';

const Covid = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SwitchNav />
      </NavigationContainer>
    </Provider>
  );
};

export default Covid;

const styles = StyleSheet.create({});
