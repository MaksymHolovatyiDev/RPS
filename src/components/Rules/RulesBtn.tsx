import {useRef} from 'react';
import {Animated, Dimensions, Text, TouchableOpacity, View} from 'react-native';

import {styles} from './Rules.styles';
import Rules from './Rules';
import {AnimatedFunction} from 'src/helpers/helpers';

export default function RulesBtn() {
  const translateY = useRef(
    new Animated.Value(Dimensions.get('screen').height),
  ).current;

  return (
    <>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btn}
          activeOpacity={0.8}
          onPress={() => AnimatedFunction(translateY, 0, 500, true)}>
          <Text style={styles.text}>Rules</Text>
        </TouchableOpacity>
      </View>
      <Rules translateY={translateY} />
    </>
  );
}
