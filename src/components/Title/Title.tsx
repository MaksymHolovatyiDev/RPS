import { Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { logo } from '../../../assets/img/svg';
import { styles } from './Title.styles';

export default function Title() {
  return (
    <View style={styles.container}>
      <SvgXml xml={logo} style={styles.logo} />
      <View style={styles.score}>
        <Text style={styles.scoreText}>Score</Text>

        <Text style={styles.scoreNumber}>12</Text>
      </View>
    </View>
  );
}
