import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  button: {
    width: '90%',
    backgroundColor: 'mediumseagreen',
    borderRadius: 8,
    marginVertical: 16,
  },
  text: {
    textAlign: 'center',
    paddingVertical: 8,
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default function Button(props) {
  const {
    title,
    acao,
  } = props;

  return (
    <TouchableOpacity style={styles.button} onPress={acao}>
      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
