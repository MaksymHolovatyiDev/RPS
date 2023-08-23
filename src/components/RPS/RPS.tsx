import { SvgXml } from 'react-native-svg';

import { bgTriangle } from '../../../assets/img/svg';
import { View } from 'react-native';
import { styles } from './RPS.styles';
import { items } from './data';
import RPSItem from './RPSItem';

export default function RPS() {
  return (
    <View style={styles.container}>
      <SvgXml xml={bgTriangle} style={styles.triangle} />

      {items.map(el => (
        <RPSItem data={el} key={el.key} />
      ))}
    </View>
  );
}
