import React from 'react';
import {
  View, Text, TouchableOpacity, Linking, StyleSheet, Alert,
} from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';

import Header from '../../components/Header';
import api from '../../services/api';

// import AbriMapa from '../../utils/AbriMapa';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },

  containerBody: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 10,
  },

  nomeCampo: {
    fontSize: 14,
    color: '#003399',
    opacity: 0.5,
    marginBottom: 4,
  },

  itemNome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#003399',
    marginBottom: 16,
  },

  item: {
    fontSize: 16,
    color: '#003399',
    marginBottom: 16,
  },

  botoes: {
    flex: 1,
    maxWidth: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },

  link: {
    flex: 1,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: 'mediumseagreen',
    marginHorizontal: 36,
    marginTop: 10,
  },

  icon: {
    color: '#fff',
    paddingVertical: 5,
  },
  apagar: {
    fontSize: 16,
    color: 'tomato',
    textAlign: 'center',
    marginTop: 300,
  },
});

export default function DetalhaUnidade({ navigation, route }) {
  const { unidade, setAtualizaUnidades } = route.params;

  function ligar() {
    Linking.openURL(`tel:+5584${unidade.telefone}`);
  }

  async function apagaUnidade() {
    await api.delete(`/api/unidade/${unidade.id}`);
    setAtualizaUnidades((state) => !state);
    navigation.navigate('unidade');
    return Alert.alert('AVISO', 'Unidade apagada.');
  }

  return (
    <View style={styles.container}>
      <Header nome="Informações da unidade" />

      <View style={styles.containerBody}>
        <Text style={styles.nomeCampo}>Unidade</Text>
        <Text style={styles.itemNome}>{unidade.nome}</Text>

        <Text style={styles.nomeCampo}>Endereço</Text>
        <Text style={styles.item}>{unidade.endereco}</Text>

        <Text style={styles.nomeCampo}>Horário de atendimento</Text>
        <Text style={styles.item}>{unidade.horario_atendimento}</Text>

        <Text style={styles.nomeCampo}>Telefone</Text>
        <Text style={styles.item}>{unidade.telefone}</Text>
      </View>

      <View style={styles.botoes}>
        <TouchableOpacity
          style={styles.link}
          onPress={() => {
            ligar();
          }}
        >
          <Feather style={styles.icon} name="phone" size={30} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.link}
          onPress={() => {
            // AbriMapa(data.nome, data.latitude, data.longitude);
          }}
        >
          <FontAwesome style={styles.icon} name="crosshairs" size={30} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => apagaUnidade()}
      >
        <Text style={styles.apagar}>Apagar unidade</Text>
      </TouchableOpacity>
    </View>
  );
}
