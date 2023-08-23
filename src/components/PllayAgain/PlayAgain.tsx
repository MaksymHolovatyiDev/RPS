import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './PlayAgain.styles';
import { useRPS } from '../../Provider/Provider';

export default function PlayAgain() {
  const { setPicked } = useRPS();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>You win</Text>
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
