import {StyleSheet} from 'react-native';
import {Colors, Dimensions} from '../../constants';

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.defaultSwipeableBackgroundColor,
  },
  imageView: {
    width: Dimensions.width * 0.8,
    height: Dimensions.height * 0.5,
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
    width: Dimensions.width * 0.8,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    color: Colors.defaultBlack,
    textAlign: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: Colors.defaultBlack,
    textAlign: 'center',
    paddingBottom: 15,
  },
});

export default styles;
