import { SvgXml } from 'react-native-svg';
import { View } from 'react-native';

import { bgTriangle } from 'assets/img/svg';
import { items } from '@/components/RPS/data';
import RPSItem from '@/components/RPS/RPSItem';
import { styles } from './RPSDefault.styles';

export default function RPSDefault() {
  return (
    <View style={styles.container}>
      <SvgXml xml={bgTriangle} style={styles.triangle} />

      {items.map(el => (
        <RPSItem data={el} key={el.key} />
      ))}
    </View>
  );
}
