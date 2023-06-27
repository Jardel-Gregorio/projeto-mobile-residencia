import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import {
  View, Text, FlatList, TouchableOpacity, StyleSheet,
} from 'react-native';

// import Container from '../../components/ContainerMain';
import Header from '../../components/Header';

import api from '../../services/api';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 10,
  },
  containerLista: {
    justifyContent: 'center',
    marginHorizontal: 16,
    marginTop: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  nome: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003399',
  },
  endereco: {
    fontSize: 15,
    marginHorizontal: 16,
    marginBottom: 5,
    color: '#003399',
  },
  containerLink: {
    margin: 4,
  },
  link: {
    maxWidth: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    borderBottomWidth: 0.5,
    borderBottomColor: '#BDBDBD',
    paddingBottom: 8,
  },
  icon: {
    paddingHorizontal: 10,
    color: '#003399',
  },
  novo: {
    width: '50%',
    marginTop: 8,
    borderRadius: 4,
    backgroundColor: 'mediumseagreen',
    alignSelf: 'center',
  },
  novoTexto: {
    color: 'white',
    paddingVertical: 4,
    alignSelf: 'center',
  },
});

export default function Unidade({ navigation }) {
  const [unidades, setUnidades] = useState([]);
  const [atualizaUnidades, setAtualizaUnidades] = useState(true);

  useEffect(() => {
    async function carregaUnidades() {
      const { data: listaUnidades } = await api.get('/api/unidade');
      if (listaUnidades) {
        setUnidades(listaUnidades);
      }
    }
    carregaUnidades();
  }, [atualizaUnidades]);

  function irParaDetalhes(unidade) {
    navigation.navigate('detalheUnidade', { setAtualizaUnidades, unidade });
  }

  return (

    <View style={styles.container}>

      <Header nome="Unidades de atendimento" />

      <TouchableOpacity style={styles.novo} onPress={() => navigation.navigate('novaUnidade', { setAtualizaUnidades })}>
        <Text style={styles.novoTexto}>Nova Unidade</Text>
      </TouchableOpacity>

      <FlatList
        data={unidades}
        keyExtractor={(unidade) => String(unidade.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: unidade }) => (
          <View style={styles.containerLista}>

            <View style={styles.containerLink}>
              <TouchableOpacity
                style={styles.link}
                onPress={() => irParaDetalhes(unidade)}
              >
                <Text style={styles.nome}>{unidade.nome}</Text>

                <Feather style={styles.icon} name="chevron-right" size={20} />

              </TouchableOpacity>
            </View>

            <Text style={styles.endereco}>{unidade.endereco}</Text>

          </View>
        )}
      />
    </View>
  );
}
