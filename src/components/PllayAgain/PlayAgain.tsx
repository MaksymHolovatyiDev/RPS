import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './PlayAgain.styles';

export default function PlayAgain() {
  const onPressPlayAgain = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.text}>You win</Text>
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.8}
        onPress={() => onPressPlayAgain}
      >
        <Text style={styles.btnText}>Play again</Text>
      </TouchableOpacity>
    </View>
  );
}
