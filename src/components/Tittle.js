import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Title({ text, size = 24 }) {
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      padding: 8,
    },
    text: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: size,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}
