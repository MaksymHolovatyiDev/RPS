import { StyleSheet } from 'react-native';
import { styleBase } from '../../stylesBase';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    padding: 20,
    borderWidth: 3,
    borderColor: styleBase.HeaderOutline,
    borderRadius: 8,
  },
  logo: {
    height: 70,
    width: 100,
  },

  score: {
    height: 70,
    width: 70,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#fff',

    borderRadius: 8,
  },

  scoreText: {
    fontFamily: styleBase.FontSBold,
    fontSize: 8,
    letterSpacing: 2,

    color: styleBase.ScoreText,

    textTransform: 'uppercase',
  },

  scoreNumber: {
    fontFamily: styleBase.FontBold,
    fontSize: 35,
    lineHeight: 35,

    color: styleBase.DarkText,
  },
});
