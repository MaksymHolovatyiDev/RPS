import {Animated, Dimensions, Text, TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {close, rules} from 'assets/img/svg';
import {RulesTypes} from '@/Types';
import {styles} from './Rules.styles';
import {AnimatedFunction} from 'src/helpers/helpers';

export default function Rules({translateY}: RulesTypes) {
  return (
    <Animated.View
      style={{...styles.container, transform: [{translateY: translateY}]}}>
      <Text style={styles.rulesText}>Rules</Text>
      <SvgXml xml={rules} style={styles.rulesImg} />
      <TouchableOpacity
        style={styles.closeBtn}
        activeOpacity={0.8}
        onPress={() =>
          AnimatedFunction(
            translateY,
            Dimensions.get('screen').height,
            500,
            true,
          )
        }>
        <SvgXml xml={close} />
      </TouchableOpacity>
    </Animated.View>
  );
}
