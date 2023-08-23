import { Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { logo } from '../../../assets/img/svg';
import { styles } from './Title.styles';
import { TitleTypes } from '../../Types';

export default function Title({ score }: TitleTypes) {
  return (
    <View style={styles.container}>
      <SvgXml xml={logo} style={styles.logo} />
      <View style={styles.score}>
        <Text style={styles.scoreText}>Score</Text>

        <Text style={styles.scoreNumber}>{score}</Text>
      </View>
    </View>
  );
}
