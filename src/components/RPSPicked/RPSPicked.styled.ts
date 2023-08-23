import { StyleSheet } from 'react-native';
import { styleBase } from '../../stylesBase';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingHorizontal: 10,
  },

  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  itemBase: {
    height: 120,
    width: 120,

    backgroundColor: '#14153988',

    borderRadius: 100 / 1,
  },

  text: {
    fontFamily: styleBase.FontBold,
    letterSpacing: 1,

    marginTop: 10,

    textTransform: 'uppercase',
  },
});
