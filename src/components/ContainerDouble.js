import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function ContainerDouble({ children }) {
  const styles = StyleSheet.create({
    container: {
      width: '90%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
    },
  });

  return (
    <View style={styles.container}>
      {children}
    </View>
  );
}
