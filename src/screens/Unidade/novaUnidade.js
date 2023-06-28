import React, { useState } from 'react';
import {
  ScrollView, View, Text, StyleSheet, Alert, TouchableOpacity, TextInput,
} from 'react-native';

import Header from '../../components/Header';

import api from '../../services/api';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  lista: {
    marginTop: 10,
    marginLeft: 20,
  },

  nomeCampo: {
    fontSize: 14,
    color: '#003399',
    opacity: 0.5,
  },

  itemNome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#003399',
    marginBottom: 16,
    marginTop: 8,
  },

  item: {
    fontSize: 16,
    color: '#003399',
    marginTop: 8,
    marginBottom: 16,
  },
  salva: {
    fontSize: 16,
    color: 'mediumseagreen',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    backgroundColor: 'lightgray',
    borderRadius: 8,
    marginHorizontal: 2,
    padding: 4,
  },
});

export default function NovaUnidade({ navigation, route }) {
  const { setAtualizaUnidades } = route.params;

  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [horarioAtendimento, setHorarioAtendimento] = useState('');
  const [telefone, setTelefone] = useState('');

  function limpaCampos() {
    setNome('');
    setEndereco('');
    setHorarioAtendimento('');
    setTelefone('');
  }

  async function criaUnidade() {
    await api.post('/api/unidade/', {
      nome,
      endereco,
      horarioAtendimento,
      telefone,
    });
    setAtualizaUnidades((state) => !state);
    limpaCampos();
    navigation.navigate('unidade');
    return Alert.alert('AVISO', 'Unidade adicionada.');
  }

  return (
    <View style={styles.container}>
      <Header nome="Nova unidade" />
      <ScrollView style={styles.lista}>
        <Text style={styles.nomeCampo}>Unidade </Text>
        <TextInput
          style={styles.input}
          placeholder="Informe o nome da unidade"
          value={nome}
          onChangeText={(e) => setNome(e)}
        />

        <Text style={styles.nomeCampo}>Endereço</Text>
        <TextInput
          style={styles.input}
          placeholder="Informe o endereçoo da unidade"
          value={endereco}
          onChangeText={(e) => setEndereco(e)}
        />

        <Text style={styles.nomeCampo}>Horário de atendimento </Text>
        <TextInput
          style={styles.input}
          placeholder="Informe o horário de atendimento"
          value={horarioAtendimento}
          onChangeText={(e) => setHorarioAtendimento(e)}
        />

        <Text style={styles.nomeCampo}>Telefone </Text>
        <TextInput
          style={styles.input}
          placeholder="Informe o telefone da unidade"
          value={telefone}
          onChangeText={(e) => setTelefone(e)}
        />
      </ScrollView>
      <TouchableOpacity
        onPress={() => criaUnidade()}
      >
        <Text style={styles.salva}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}
