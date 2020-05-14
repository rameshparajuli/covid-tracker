import {StyleSheet} from 'react-native';
import {Common, Colors} from '../../constants';

const styles = StyleSheet.create({
  container: {
    height: Common.Button_Height,
    width: Common.Button_Width,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Common.Primary_Color,
    borderRadius: 5,
    marginVertical: 5,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    paddingHorizontal: 10,
  },
  selectButton: {
    height: Common.Select_Button_Height,
    width: Common.Select_Button_Width,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: 'transparent',
    elevation: 4,
    justifyContent: 'center',
    backgroundColor: Colors.defaultWhite,
  },
});

export default styles;
