import LinearGradient from 'react-native-linear-gradient';

import Title from '@/components/Title/Title';
import RPS from '@/components/RPS/RPS';
import RulesBtn from '@/components/Rules/RulesBtn';
import {styles} from './Main.styles';

export default function Main() {
  return (
    <LinearGradient
      start={{x: 0.0, y: 0.25}}
      end={{x: 0.5, y: 1.0}}
      locations={[0, 0.5]}
      colors={['#1f3756', '#141539']}
      style={styles.gradient}>
      <Title />
      <RPS />
      <RulesBtn />
    </LinearGradient>
  );
}
