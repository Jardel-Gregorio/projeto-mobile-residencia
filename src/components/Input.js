import React from 'react';
import {
  StyleSheet, TextInput, Text, View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '90%',
  },
  text: {
    color: 'white',
    padding: 2,
  },
  input: {
    backgroundColor: 'lightgray',
    borderRadius: 8,
    marginHorizontal: 2,
    padding: 4,
  },
});

export default function Input(props) {
  const {
    password,
    title,
    placeholder,
    text,
    setText,
  } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <TextInput
        secureTextEntry={password}
        style={styles.input}
        placeholder={placeholder}
        value={text}
        onChangeText={(e) => setText(e)}
      />
    </View>
  );
}
