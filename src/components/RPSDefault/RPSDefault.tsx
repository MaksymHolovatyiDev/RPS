import { SvgXml } from 'react-native-svg';

import { bgTriangle } from '../../../assets/img/svg';
import { View } from 'react-native';
import { styles } from './RPSDefault.styles';
import { items } from '../RPS/data';
import RPSItem from '../RPS/RPSItem';

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
