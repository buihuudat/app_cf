import {StyleSheet} from 'react-native';
import {black, mainColor} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: black,
  },
  tabScroll: {maxHeight: 45, color: 'white'},
  tab: {},

  tabIndicator: {
    backgroundColor: mainColor,
    height: 3,
  },

  tabItem: {},

  tabItemText: {
    fontWeight: '600',
    fontSize: 20,
    minWidth: 60,
    height: 40,
    textAlign: 'center',
    textTransform: 'capitalize',
    color: 'white',
  },

  productList: {
    flexGrow: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 10,
  },
});
