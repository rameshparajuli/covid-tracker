import React from 'react';
import {View, Animated, Dimensions, SafeAreaView, Text} from 'react-native';

import SwipeableView from '../../components/SwipeablePractice';

const {width} = Dimensions.get('window');

class Swipeable extends React.Component {
  scrollX = new Animated.Value(0);

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <View style={{flex: 1}}>
          <Animated.ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{flexGrow: 1}}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: this.scrollX}}}],
              {useNativeDriver: true},
            )}>
            <View style={{flex: 1, backgroundColor: 'white', width}} />
            <View style={{flex: 1, backgroundColor: 'gray', width}} />
            <View style={{flex: 1, backgroundColor: 'white', width}} />
            <View style={{flex: 1, backgroundColor: 'gray', width}} />
            <View style={{flex: 1, backgroundColor: 'white', width}} />
            <View style={{flex: 1, backgroundColor: 'gray', width}} />
            <View style={{flex: 1, backgroundColor: 'white', width}}>
              <Text>No 7</Text>
            </View>
          </Animated.ScrollView>
          <View
            style={{
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 100,
              marginBottom: 20,
              position: 'absolute',
            }}>
            <SwipeableView
              numberOfCards={7}
              scrollWidth={width}
              activeColor={'black'}
              inActiveColor={'pink'}
              scrollAnimatedValue={this.scrollX}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Swipeable;
