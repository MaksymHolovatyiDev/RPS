import { StyleSheet } from 'react-native';
import { styleBase } from '../../stylesBase';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',

    gap: 10,
  },

  btn: {
    width: 240,

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: styleBase.white,

    borderRadius: 8,
    paddingHorizontal: 40,
    paddingVertical: 14,
  },

  text: {
    fontFamily: styleBase.FontBold,
    fontSize: 48,
    letterSpacing: 2,

    color: styleBase.white,

    textTransform: 'uppercase',
  },

  btnText: {
    fontFamily: styleBase.FontSBold,
    fontSize: 16,
    letterSpacing: 2,

    color: styleBase.DarkText,

    textTransform: 'uppercase',
  },
});
