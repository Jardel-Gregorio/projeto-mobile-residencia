import React from 'react';
import { Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    height: '60%',
    marginVertical: 30,
  },
});

export default function ImageResult({ source }) {
  return (
    <Image
      style={styles.image}
      source={source}
      resizeMode="contain"
    />
  );
}
