import {StyleSheet} from 'react-native';
import {Colors, Dimensions} from '../../constants';

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.defaultSwipeableBackgroundColor,
  },
  imageView: {
    width: Dimensions.width * 0.7,
    height: Dimensions.height * 0.4,
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Dimensions.height * 0.1,
  },
  image: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  textView: {
    flex: 2.5,
    width: Dimensions.width * 0.8,
    alignItems: 'center',
  },
  description: {
    color: Colors.defaultBlack,
    textAlign: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.defaultBlack,
    textAlign: 'center',
    paddingBottom: 10,
  },
});

export default styles;
