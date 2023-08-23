import { Text, View } from 'react-native';
import RPSItem from '../RPS/RPSItem';
import { items } from '../RPS/data';
import { styles } from './RPSPicked.styled';
import PlayAgain from '../PllayAgain/PlayAgain';

export default function RPSPicked() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <RPSItem data={items[0]} isSelected={true} />
          <Text style={styles.text}>You picked</Text>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemBase}>
            <RPSItem data={items[1]} isSelected={true} />
          </View>
          <Text style={styles.text}>The house picked</Text>
        </View>
      </View>
      <PlayAgain />
    </>
  );
}
