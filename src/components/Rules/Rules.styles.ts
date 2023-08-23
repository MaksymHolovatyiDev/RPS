import { Dimensions, StyleSheet } from 'react-native';
import { styleBase } from '../../stylesBase';

export const styles = StyleSheet.create({
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    position: 'absolute',
    top: 0,
    left: 0,

    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,

    justifyContent: 'center',
    alignItems: 'center',

    gap: 100,

    backgroundColor: styleBase.white,

    padding: 40,
  },

  closeBtn: { padding: 10 },

  btn: {
    width: 120,

    justifyContent: 'center',
    alignItems: 'center',

    borderWidth: 1,
    borderColor: styleBase.white,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },

  text: {
    fontFamily: styleBase.FontSBold,
    fontSize: 16,
    letterSpacing: 5,

    color: styleBase.white,

    textTransform: 'uppercase',
  },

  rulesText: {
    fontFamily: styleBase.FontBold,
    fontSize: 32,
    letterSpacing: 1,

    color: '#000',

    textTransform: 'uppercase',
  },

  rulesImg: { height: Dimensions.get('screen').width - 80, width: '100%' },
});
