import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';

const styles = StyleSheet.create({
  containerHeader: {
    width: '100%',
    height: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#003399',
    alignItems: 'center',
  },

  btnVoltar: {
    justifyContent: 'center',
    paddingLeft: 8,
  },

  iconHeader: {
    color: '#FFF',
  },

  textHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default function Header({ nome }) {
  const navigation = useNavigation();

  function voltar() {
    if (nome !== 'Inicial') {
      navigation.goBack();
    }
  }

  return (
    <View style={styles.containerHeader}>
      {(nome !== 'Inicial')
        ? (
          <TouchableOpacity style={styles.btnVoltar} onPress={() => voltar()}>
            <Feather style={styles.iconHeader} name="arrow-left" size={30} />
          </TouchableOpacity>
        ) : <Text style={styles.textHeader}>      </Text>}
      <Text style={styles.textHeader}>{nome}</Text>
      <Text style={styles.textHeader}>      </Text>
    </View>
  );
}
