import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  button: {
    width: '45%',
    justifyContent: 'center',
    backgroundColor: 'mediumseagreen',
    borderRadius: 8,
    marginTop: 16,
    paddingVertical: 16,
  },
  iconHeader: {
    alignSelf: 'center',
    color: '#FFF',
  },
  text: {
    textAlign: 'center',
    paddingVertical: 8,
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default function ModuleCard({ nome, rota, icon }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(rota)}>
      <FontAwesome style={styles.iconHeader} name={icon} size={30} />
      <Text style={styles.text}>
        {nome}
      </Text>
    </TouchableOpacity>
  );
}
