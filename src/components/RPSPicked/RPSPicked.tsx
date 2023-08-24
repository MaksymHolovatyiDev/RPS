import {Animated, Text, View} from 'react-native';
import RPSItem from '@/components/RPS/RPSItem';
import {items} from '@/components/RPS/data';
import PlayAgain from 'src/components/PlayAgain/PlayAgain';
import {useRPS} from '@/Provider/Provider';
import {styles} from './RPSPicked.styled';
import {useEffect, useRef} from 'react';
import {AnimatedFunction} from 'src/helpers/helpers';

export default function RPSPicked() {
  const opacity = useRef(new Animated.Value(0)).current;

  const {picked, housePick} = useRPS();

  useEffect(() => {
    setTimeout(() => {
      AnimatedFunction(opacity, 1);
    }, 500);
  }, []);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <RPSItem data={picked!} isSelected={true} />
          <Text style={styles.text}>You picked</Text>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemBase}>
            <Animated.View style={{opacity}}>
              <RPSItem data={items[housePick!]} isSelected={true} />
            </Animated.View>
          </View>
          <Text style={styles.text}>The house picked</Text>
        </View>
      </View>
      <PlayAgain />
    </>
  );
}
