import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './PlayAgain.styles';
import { useRPS } from '@/Provider/Provider';
import { items } from '@/components/RPS/data';
import { useEffect, useState } from 'react';

export default function PlayAgain() {
  const [message, setMessage] = useState('');
  const { picked, housePick, score, setPicked, setScore } = useRPS();

  useEffect(() => {
    if (picked?.key === items[housePick ? housePick - 1 : 2].key) {
      setScore(prevState => ++prevState);
      setMessage('You win');
    } else if (picked?.key === items[housePick!].key) {
      setMessage('Draw');
    } else {
      setMessage('You lose');
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.8}
        onPress={() => setPicked(null)}
      >
        <Text style={styles.btnText}>Play again</Text>
      </TouchableOpacity>
    </View>
  );
}
