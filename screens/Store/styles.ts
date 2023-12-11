import {StyleSheet} from 'react-native';
import {black, dark, mainColor} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: black,
  },

  storeList: {
    flexGrow: 1,
    alignItems: 'center',
  },

  storeItem: {
    width: 150,
    borderRadius: 20,
    padding: 5,
    elevation: 5,
    backgroundColor: '#252A32',
  },
  image: {
    width: '100%',
  },

  title: {
    textTransform: 'capitalize',
    paddingTop: 5,
    fontSize: 20,
    color: mainColor,
  },
});
