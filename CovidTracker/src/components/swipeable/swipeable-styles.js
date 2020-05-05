import {StyleSheet} from 'react-native';
import {Colors, Dimensions} from '../../constants';

const defaultHeight = 20;
const styles = StyleSheet.create({
  bottomView: {
    // borderWidth: 1,
    // borderColor: 'red',
    // paddingHorizontal: -10,
    // position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    overflow: 'visible',
    backgroundColor: Colors.defaultSwipeableBackgroundColor,
  },
  defaultButton: {flexDirection: 'row', paddingVertical: 4},
  logo: {
    alignSelf: 'center',
    height: defaultHeight,
    width: defaultHeight,
    borderRadius: defaultHeight / 2,
  },
});

export default styles;
