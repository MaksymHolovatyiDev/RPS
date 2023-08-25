import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {RPSDataType} from '@/Types';
import {useRPS} from '@/Provider/Provider';
import {styles} from './RPS.styles';
import {AnimatedFunction} from 'src/helpers/helpers';

export default function RPSItem({data, isSelected}: RPSDataType) {
  const {setPicked, setHousePick, opacity} = useRPS();

  const onButtonPress = () => {
    if (!isSelected) {
      AnimatedFunction(opacity, 0);
      setHousePick(Math.floor(Math.random() * 5));
      setTimeout(() => setPicked(data), 500);
    }
  };

  return (
    <TouchableOpacity
      onPress={onButtonPress}
      style={
        !isSelected && {
          position: 'absolute',
          ...styles.item,
          ...data.style,
        }
      }>
      <LinearGradient
        start={{x: 0.0, y: 0.0}}
        end={{x: 0.0, y: 0.5}}
        locations={[0, 0.5]}
        colors={data?.colors}
        style={styles.item}>
        <View style={styles.itemBg}>
          <SvgXml xml={data?.xml} style={styles?.img} />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}
