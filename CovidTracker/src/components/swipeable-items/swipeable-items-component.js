import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './swipeable-items-styles';
const SwipeableItems = ({item}) => {
  return (
    <View style={[styles.slide]}>
      <View style={styles.imageView}>
        <Image
          resizeMode={'contain'}
          source={item.image}
          style={styles.image}
        />
      </View>
      <View style={styles.textView}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.text}</Text>
      </View>
    </View>
  );
};

export default SwipeableItems;
