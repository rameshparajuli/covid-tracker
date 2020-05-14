import {StyleSheet} from 'react-native';
import {Colors, Dimensions} from '../../constants';

const defaultHeight = 20;
const styles = StyleSheet.create({
  slide: {
    flex: 1,
  },
  imageView: {
    width: Dimensions.width * 0.7,
    height: Dimensions.height * 0.4,
    flex: 3,
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
    width: Dimensions.width * 1,
    alignItems: 'center',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.defaultBlack,
    textAlign: 'center',
    paddingBottom: 10,
  },
  bottomView: {
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
  genderText: {
    color: Colors.placeholderColor,
  },
  genderView: {
    // borderWidth: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 5,
  },
  genderList: {
    padding: 5,
    backgroundColor: Colors.defaultWhite,
    borderRadius: 5,
  },
  genderListView: {
    padding: 3,
    elevation: 0.1,
  },
});

export default styles;
