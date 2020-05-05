import React from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Colors} from '../../constants';
import SwipeableItems from '../swipeable-items/swipeable-items-component';

const _keyExtractor = (item) => item.title;

const SwipeableView = ({data}) => {
  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor={Colors.defaultBlack} />
      <AppIntroSlider
        keyExtractor={_keyExtractor}
        renderItem={SwipeableItems}
        data={data}
        showSkipButton
      />
      <View>
        <Text>Google Login</Text>
      </View>
    </View>
  );
};

export default SwipeableView;
