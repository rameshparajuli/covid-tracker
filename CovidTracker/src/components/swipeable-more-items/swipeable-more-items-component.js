import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StatusBar,
  TextInput,
  Alert,
  LayoutAnimation,
  TouchableOpacity,
  Platform,
  UIManager,
} from 'react-native';
import styles from './swipeable-more-items-styles';

import {Colors} from '../../constants';
import DefaultButton, {
  SelectButton,
} from '../../components/custom-button/custom-button.component';

import {swipeable_images} from '../../assets';

import {logos} from '../../assets';

export const RenderDetails = () => {
  return (
    <View style={styles.genderList}>
      <TouchableOpacity style={styles.genderListView}>
        <Text style={[{fontSize: 16}, styles.genderText]}>Male</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.genderListView}>
        <Text style={[{fontSize: 16}, styles.genderText]}>Female</Text>
      </TouchableOpacity>
    </View>
  );
};

const dataStore = [
  {
    id: 1,
    gender: 'male',
  },
  {
    id: 2,
    gender: 'female',
  },
];

const SwipeableMoreItems = () => {
  useEffect(() => {
    //   componentDidMount
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, []);
  const [state, setState] = useState(null);

  const [arrowSet, setArrow] = useState({
    layoutHeight: 0,
    arrow: false,
  });

  const ChangeText = (event) => setState(event.target.value);

  const onClick = () => {
    Alert.alert(state);
  };

  const toggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setArrow((prevState) => ({arrow: !prevState.arrow}));
  };

  return (
    <View style={[styles.slide]}>
      <StatusBar translucent backgroundColor={Colors.defaultBlue} />
      <View
        style={{
          flex: 4,
          alignItems: 'center',
          backgroundColor: Colors.defaultSwipeableBackgroundColor,
        }}>
        <View style={styles.imageView}>
          <Image
            resizeMode={'contain'}
            source={swipeable_images.details}
            style={styles.image}
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.title}>Few More Details</Text>
          <View
            style={{
              paddingVertical: 10,
              justifyContent: 'center',
            }}>
            <SelectButton>
              <TextInput
                placeholder="phone Number"
                keyboardType="number-pad"
                onChange={ChangeText}
                value={state}
              />
            </SelectButton>
          </View>
          <View style={{paddingVertical: 10, height: arrowSet.layoutHeight}}>
            <SelectButton>
              <TouchableOpacity
                onPress={toggle.bind(this)}
                activeOpacity={0.8}
                style={styles.genderView}>
                <Text style={styles.genderText}>Gender</Text>
                <Image
                  resizeMode={'contain'}
                  source={
                    arrowSet.arrow
                      ? swipeable_images.up_arrow
                      : swipeable_images.down_arrow
                  }
                  style={{height: 30, width: 30}}
                />
              </TouchableOpacity>
            </SelectButton>

            {arrowSet.arrow && <RenderDetails />}
          </View>
        </View>
      </View>

      <ImageBackground
        source={swipeable_images.bottom_bg}
        style={styles.bottomView}>
        <DefaultButton
          style={styles.defaultButton}
          title="Complete Registration"
          textColor={Colors.defaultWhite}
          onPress={onClick}
        />
      </ImageBackground>
    </View>
  );
};

export default SwipeableMoreItems;
