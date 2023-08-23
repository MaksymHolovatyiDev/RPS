import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './Rules.styles';
import { RulesTypes } from '../../Types';
import { SvgXml } from 'react-native-svg';
import { close, rules } from '../../../assets/img/svg';

export default function Rules({ isModalOpen, setIsModalOpen }: RulesTypes) {
  return (
    <>
      {isModalOpen && (
        <View style={styles.container}>
          <Text style={styles.rulesText}>Rules</Text>
          <SvgXml xml={rules} style={styles.rulesImg} />
          <TouchableOpacity
            style={styles.closeBtn}
            activeOpacity={0.8}
            onPress={() => setIsModalOpen(false)}
          >
            <SvgXml xml={close} />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}
