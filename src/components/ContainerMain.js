import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function ContainerMain({ pt = 0, children }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      padding: 24,
      backgroundColor: 'steelblue',
      paddingTop: pt,
    },
    text: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 30,
      marginBottom: 30,
    },
  });

  return (
    <View style={styles.container}>
      {children}
    </View>
  );
}
