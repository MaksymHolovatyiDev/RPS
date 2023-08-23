import LinearGradient from 'react-native-linear-gradient';
import { styles } from './RPS.styles';
import { TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { RPSDataType } from '../../Types';
import { useRPS } from '../../Provider/Provider';

export default function RPSItem({ data, isSelected }: RPSDataType) {
  const { setPicked } = useRPS();

  const onButtonPress = () => {
    if (!isSelected) setPicked(data);
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
      }
    >
      <LinearGradient
        start={{ x: 0.0, y: 0.0 }}
        end={{ x: 0.0, y: 0.5 }}
        locations={[0, 0.5]}
        colors={data.colors}
        style={styles.item}
      >
        <View style={styles.itemBg}>
          <SvgXml xml={data.xml} style={styles.img} />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}
