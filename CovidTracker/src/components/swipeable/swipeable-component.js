import React from 'react';
import {View, Text, Image, StatusBar, ImageBackground} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Colors} from '../../constants';
import SwipeableItems from '../swipeable-items/swipeable-items-component';
import DefaultButton from '../../components/custom-button/custom-button.component';

import {swipeable_images} from '../../assets';

import {logos} from '../../assets';
import styles from './swipeable-styles';
const _keyExtractor = (item) => item.title;

const SwipeableView = ({data}) => {
  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor={Colors.defaultBlue} />
      <View style={{flex: 4}}>
        <AppIntroSlider
          keyExtractor={_keyExtractor}
          renderItem={SwipeableItems}
          data={data}
          showSkipButton
        />
      </View>
      <ImageBackground
        source={swipeable_images.bottom_bg}
        style={styles.bottomView}>
        <DefaultButton
          style={styles.defaultButton}
          title="Login With Google"
          textColor={Colors.defaultWhite}>
          <Image
            resizeMode={'contain'}
            source={logos.google_white}
            style={styles.logo}
          />
        </DefaultButton>
      </ImageBackground>
    </View>
  );
};

export default SwipeableView;
