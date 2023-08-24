import { Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { close, rules } from 'assets/img/svg';
import { RulesTypes } from '@/Types';
import { styles } from './Rules.styles';

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
