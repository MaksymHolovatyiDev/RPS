import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './Rules.styles';
import Rules from './Rules';

export default function RulesBtn() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btn}
          activeOpacity={0.8}
          onPress={() => setIsModalOpen(true)}
        >
          <Text style={styles.text}>Rules</Text>
        </TouchableOpacity>
      </View>
      <Rules isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
}
