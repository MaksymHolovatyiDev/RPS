import LinearGradient from 'react-native-linear-gradient';
import { styles } from './RPS.styles';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { RPSDataType } from '../../Types';

export default function RPSItem({ data }: RPSDataType) {
  return (
    <LinearGradient
      start={{ x: 0.0, y: 0.0 }}
      end={{ x: 0.0, y: 0.8 }}
      locations={[0, 0.5]}
      colors={data.colors}
      style={{ ...styles.item, ...data.style }}
    >
      <View style={styles.itemBg}>
        <SvgXml xml={data.xml} style={styles.img} />
      </View>
    </LinearGradient>
  );
}
