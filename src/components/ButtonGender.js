import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: 'indianred',
    borderRadius: 8,
    marginHorizontal: 2,
  },
  buttonActive: {
    backgroundColor: 'red',
    borderWidth: 2,
    borderColor: 'white',
  },
  text: {
    textAlign: 'center',
    paddingVertical: 8,
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default function ButtonGender(props) {
  const {
    title,
    sexo,
    setSexo,
  } = props;

  const { button, buttonActive } = styles;
  const finalButton = sexo === title ? [button, buttonActive] : button;

  const handleTouchableOpacityPress = () => {
    setSexo(title);
  };

  return (
    <TouchableOpacity style={finalButton} onPress={handleTouchableOpacityPress}>
      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
