import { StatusBar, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  gradient: {
    flex: 1,

    justifyContent: 'space-between',

    paddingTop: 10 + (StatusBar.currentHeight || 0),
    paddingBottom: 80,
    paddingHorizontal: 25,
  },
});
