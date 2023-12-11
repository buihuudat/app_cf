import {Text, StyleSheet} from 'react-native';
import React, {ReactElement} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {black} from '../constants/colors';

const Gradient = ({children}: {children: ReactElement}) => {
  return (
    <LinearGradient
      colors={['#fff', '#252A32', black]}
      style={styles.linearGradient}>
      {children}
    </LinearGradient>
  );
};

export default Gradient;
var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
