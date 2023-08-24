import {Animated, Text, TouchableOpacity} from 'react-native';
import {styles} from './PlayAgain.styles';
import {useRPS} from '@/Provider/Provider';
import {items} from '@/components/RPS/data';
import {useEffect, useRef, useState} from 'react';
import {AnimatedFunction} from 'src/helpers/helpers';

export default function PlayAgain() {
  const [message, setMessage] = useState('');
  const {picked, housePick, setPicked, setScore, opacity} = useRPS();
  const translateY = useRef(new Animated.Value(60)).current;
  const mainOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setTimeout(() => {
      if (
        picked?.key === items[housePick ? housePick - 1 : 4].key ||
        picked?.key ===
          items[housePick! + 2 > 4 ? housePick! - 3 : housePick! + 2].key
      ) {
        setScore(prevState => ++prevState);
        setMessage('You win');
      } else if (picked?.key === items[housePick!].key) {
        setMessage('Draw');
      } else {
        setMessage('You lose');
      }
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
