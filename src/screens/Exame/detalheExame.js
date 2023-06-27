import React from 'react';
import {
  ScrollView, View, Text, StyleSheet,
} from 'react-native';

import Header from '../../components/Header';

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
});

export default function DetalheExame({ route }) {
  const { exame } = route.params;

  return (
    <View style={styles.container}>
      <Header nome="Informações do exame" />
      <ScrollView style={styles.lista}>
        <Text style={styles.nomeCampo}>Nome do exame </Text>
        <Text style={styles.itemNome}>{exame.nome}</Text>

        <Text style={styles.nomeCampo}>Material coletado</Text>
        <Text style={styles.item}>{exame.material}</Text>

        <Text style={styles.nomeCampo}>Instruções </Text>
        <Text style={styles.item}>{exame.instrucoes}</Text>

        <Text style={styles.nomeCampo}>Tempo de entrega </Text>
        <Text style={styles.item}>{exame.prazo}</Text>
      </ScrollView>
    </View>
  );
}
