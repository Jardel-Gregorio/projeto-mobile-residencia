import React, { useEffect, useState } from 'react';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

// import Container from '../../components/ContainerMain';
import Header from '../../components/Header';

import api from '../../services/api';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerTop: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },

  containerSearch: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#003399',
    height: 40,
    borderRadius: 20,
    marginTop: 8,
    marginHorizontal: 10,
  },

  icon: {
    padding: 5,
    color: '#003399',
  },

  input: {
    flex: 1,
    color: '#0404B4',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    fontSize: 16,
    maxWidth: '100%',
    shadowColor: '#0496FF',
    // placeholderTextColor
  },

  containerList: {
    maxWidth: '100%',
    paddingHorizontal: 10,
    paddingBottom: 125,
  },

  botaoLista: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#D8D8D8',
    paddingTop: 12,
    paddingBottom: 12,
  },

  vazio: {
    fontSize: 16,
    color: '#003399',
    marginLeft: 10,
    marginTop: 20,
  },

  itemLista: {
    flex: 10,
    fontSize: 16,
    color: '#003399',
    marginLeft: 10,
  },

  plus: {
    paddingTop: 8,
    paddingHorizontal: 16,
    color: 'mediumseagreen',
  },

  chevron: {
    color: '#003399',
  },

});

export default function Exame({ navigation }) {
  const [todosExames, setTodosExames] = useState([]);
  const [exames, setExames] = useState([]);
  const [nome, setNome] = useState('');
  const [atualizaExames, setAtualizaExames] = useState(true);

  useEffect(() => {
    async function carregaExames() {
      const { data: listaExames } = await api.get('/api/exame');
      if (listaExames) {
        setTodosExames(listaExames);
        setExames(listaExames);
      }
    }
    carregaExames();
  }, [atualizaExames]);

  async function procuraExames(e) {
    e.preventDefault();
    setNome(e.nativeEvent.text);

    const filtro = todosExames.filter((exame) => exame.nome.includes(e.nativeEvent.text));
    setExames(filtro);
  }

  function irParaDetalhes(exame) {
    navigation.navigate('detalheExame', { exame, setAtualizaExames });
  }

  return (
    <>
      <Header nome="Menu de exames" />
      <View style={styles.container}>
        <View style={styles.containerTop}>
          <View style={styles.containerSearch}>
            <Feather style={styles.icon} name="search" size={24} />
            <TextInput
              style={styles.input}
              autoCapitalize="characters"
              autoCompleteType="off"
              autoCorrect={false}
              placeholder="Pesquise pelo nome do exame"
              onChange={() => procuraExames()}
              value={nome}
            />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('novoExame', { setAtualizaExames })}>
            <FontAwesome5 style={styles.plus} name="plus-circle" size={32} />
          </TouchableOpacity>
        </View>

        <View style={styles.containerList}>
          <FlatList
            data={exames}
            keyExtractor={(exame) => exame.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item: exame }) => (
              <TouchableOpacity
                style={styles.botaoLista}
                onPress={() => irParaDetalhes(exame)}
              >
                <Text style={styles.itemLista}>{exame.nome}</Text>
                <Feather style={styles.chevron} name="chevron-right" size={24} />
              </TouchableOpacity>
            )}
          />
          { exames.length === 0
            ? <Text style={styles.vazio}>NENHUM EXAME ENCONTRADO</Text>
            : <Text />}
        </View>
      </View>
    </>
  );
}
