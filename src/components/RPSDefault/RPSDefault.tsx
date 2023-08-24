import {SvgXml} from 'react-native-svg';
import {Animated} from 'react-native';

import {bgPentagon} from 'assets/img/svg';
import {items} from '@/components/RPS/data';
import RPSItem from '@/components/RPS/RPSItem';
import {styles} from './RPSDefault.styles';
import {useRPS} from 'src/Provider/Provider';

export default function RPSDefault() {
  const {opacity} = useRPS();

  return (
    <Animated.View style={{...styles.container, opacity}}>
      <SvgXml xml={bgPentagon} style={styles.pentagon} />

      {items.map(el => (
        <RPSItem data={el} key={el.key} />
      ))}
    </Animated.View>
  );
}
