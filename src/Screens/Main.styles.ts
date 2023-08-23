import { StatusBar, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  gradient: {
    flex: 1,

    gap: 180,

    paddingTop: 10 + (StatusBar.currentHeight || 0),
    paddingHorizontal: 25,
  },
});
