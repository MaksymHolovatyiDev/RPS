import React from 'react';

import { styles } from './MainPage.styles';
import { Text, View } from 'react-native';
import Title from '../components/Title';
import LinearGradient from 'react-native-linear-gradient';

export default function Main() {
  return (
    <LinearGradient
      start={{ x: 0.0, y: 0.25 }}
      end={{ x: 0.5, y: 1.0 }}
      locations={[0, 0.5]}
      colors={['#1f3756', '#141539']}
      style={styles.gradient}
    >
      <View>
        <Title />
        <Text>asfd</Text>
      </View>
    </LinearGradient>
  );
}
