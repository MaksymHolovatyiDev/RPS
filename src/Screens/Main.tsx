import React, { useState } from 'react';

import { styles } from './Main.styles';
import Title from '../components/Title/Title';
import LinearGradient from 'react-native-linear-gradient';
import RPS from '../components/RPS/RPS';
import RulesBtn from '../components/Rules/RulesBtn';

export default function Main() {
  const [score, setScore] = useState(0);

  return (
    <LinearGradient
      start={{ x: 0.0, y: 0.25 }}
      end={{ x: 0.5, y: 1.0 }}
      locations={[0, 0.5]}
      colors={['#1f3756', '#141539']}
      style={styles.gradient}
    >
      <Title score={score} />
      <RPS />
      <RulesBtn />
    </LinearGradient>
  );
}
