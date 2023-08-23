import { StyleSheet } from 'react-native';
import { styleBase } from '../../stylesBase';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },

  triangle: {
    height: 250,
    width: 250,
  },

  item: {
    height: 120,
    width: 120,

    position: 'absolute',

    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 100 / 1,
  },

  itemBg: {
    backgroundColor: '#fff',

    padding: 20,

    borderRadius: 100 / 1,
  },

  img: {
    height: 50,
    width: 50,
  },

  paper: {
    top: -30,
    left: 30,
  },

  scissors: {
    top: -30,
    right: 30,
  },

  rock: {
    bottom: 0,
  },
});
