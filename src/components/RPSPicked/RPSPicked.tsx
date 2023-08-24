import { Text, View } from 'react-native';
import RPSItem from '@/components/RPS/RPSItem';
import { items } from '@/components/RPS/data';
import PlayAgain from '@/components/PllayAgain/PlayAgain';
import { useRPS } from '@/Provider/Provider';
import { styles } from './RPSPicked.styled';

export default function RPSPicked() {
  const { picked, housePick } = useRPS();

  return (
    <>
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <RPSItem data={picked!} isSelected={true} />
          <Text style={styles.text}>You picked</Text>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemBase}>
            <RPSItem data={items[housePick!]} isSelected={true} />
          </View>
          <Text style={styles.text}>The house picked</Text>
        </View>
      </View>
      <PlayAgain />
    </>
  );
}
