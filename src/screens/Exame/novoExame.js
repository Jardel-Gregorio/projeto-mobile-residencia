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
    marginHorizontal: 20,
  },

  nomeCampo: {
    fontSize: 14,
    color: '#003399',
    opacity: 0.5,
    paddingLeft: 8,
    paddingBottom: 4,
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
    marginBottom: 16,
  },
});

export default function NovoExame({ navigation, route }) {
  const { setAtualizaExames } = route.params;

  const [nome, setNome] = useState('');
  const [material, setMaterial] = useState('');
  const [instrucoes, setInstrucoes] = useState('');
  const [prazo, setPrazo] = useState('');

  function limpaCampos() {
    setNome('');
    setMaterial('');
    setInstrucoes('');
    setPrazo('');
  }

  async function criaExame() {
    await api.post('/api/exame/', {
      nome,
      material,
      instrucoes,
      prazo,
    });
    setAtualizaExames((state) => !state);
    limpaCampos();
    navigation.navigate('exame');
    return Alert.alert('AVISO', 'Exame adicionado.');
  }

  return (
    <View style={styles.container}>
      <Header nome="Novo exame" />
      <ScrollView style={styles.lista}>
        <Text style={styles.nomeCampo}>Nome do exame </Text>
        <TextInput
          style={styles.input}
          placeholder="Informe o nome do exame"
          value={nome}
          onChangeText={(e) => setNome(e)}
        />

        <Text style={styles.nomeCampo}>Material coletado</Text>
        <TextInput
          style={styles.input}
          placeholder="Informe o material utilizado no exame"
          value={material}
          onChangeText={(e) => setMaterial(e)}
        />

        <Text style={styles.nomeCampo}>Instruções </Text>
        <TextInput
          style={styles.input}
          placeholder="Informe as intruções para realizar o exame"
          value={instrucoes}
          onChangeText={(e) => setInstrucoes(e)}
        />

        <Text style={styles.nomeCampo}>Tempo de entrega </Text>
        <TextInput
          style={styles.input}
          placeholder="Informe o tempo de entrega do exame"
          value={prazo}
          onChangeText={(e) => setPrazo(e)}
        />
      </ScrollView>
      <TouchableOpacity
        onPress={() => criaExame()}
      >
        <Text style={styles.salva}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}
