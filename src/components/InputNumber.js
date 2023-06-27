import React from 'react';
import {
  StyleSheet, TextInput, Text, View,
} from 'react-native';
import apenasNumero from '../utils/apenasNumero';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: 'white',
  },
  input: {
    backgroundColor: 'lightgray',
    borderRadius: 8,
    marginHorizontal: 2,
    padding: 4,
  },
});

export default function InputNumber(props) {
  const {
    edit,
    title,
    placeholder,
    numero,
    setNumero,
  } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <TextInput
        editable={edit}
        keyboardType="numeric"
        style={styles.input}
        placeholder={placeholder}
        value={numero}
        onChangeText={(e) => setNumero(apenasNumero(e))}
      />
    </View>
  );
}
