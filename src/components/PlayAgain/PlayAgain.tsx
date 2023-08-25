import {Animated, Text, TouchableOpacity} from 'react-native';
import {styles} from './PlayAgain.styles';
import {useRPS} from '@/Provider/Provider';
import {items, playerMessage} from '@/components/RPS/data';
import {useEffect, useRef, useState} from 'react';
import {AnimatedFunction} from 'src/helpers/helpers';

export default function PlayAgain() {
  const [message, setMessage] = useState('');
  const {picked, housePick, setPicked, setScore, opacity} = useRPS();
  const translateY = useRef(new Animated.Value(60)).current;
  const mainOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setTimeout(() => {
      const playerIdx = items.findIndex(el => picked?.key === el.key);
      const resultMsg = playerMessage[playerIdx][housePick!];
      setMessage(resultMsg);
      if (resultMsg === 'You win') setScore(prevState => ++prevState);
      AnimatedFunction(translateY, 0, 300);
      AnimatedFunction(mainOpacity, 1, 300);
    }, 1200);
  }, []);

  return (
    <Animated.View
      style={{
        ...styles.container,
        opacity: mainOpacity,
        transform: [{translateY}],
      }}>
      <Text style={styles.text}>{message}</Text>
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.8}
        onPress={() => {
          setPicked(null);
          AnimatedFunction(opacity, 1);
        }}>
        <Text style={styles.btnText}>Play again</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}
