import {StyleSheet} from 'react-native';
import {Common} from '../../constants';

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
});

export default styles;
