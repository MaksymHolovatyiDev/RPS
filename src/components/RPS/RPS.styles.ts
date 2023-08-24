import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  item: {
    height: 120,
    width: 120,

    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 100 / 1,
  },

  itemBg: {
    backgroundColor: '#fff',

    padding: 20,

    borderRadius: 100 / 1,
    borderWidth: 3,
    borderColor: '#00000033',
  },

  img: {
    height: 50,
    width: 50,
  },

  paper: {
    top: 50,
    right: 0,
  },

  scissors: {
    top: -30,
  },

  rock: {
    bottom: -30,
    right: 50,
  },

  lizard: {
    bottom: -30,
    left: 50,
  },

  spock: {
    top: 50,
    left: 0,
  },
});
