import React from 'react';
import { Input as NativeBaseInput } from 'native-base';

export default function Input() {
  return (
    <NativeBaseInput
      bg="gray.700"
      h={14}
      size="md"
      borderWidth={0}
      fontSize="md"
      fontFamily="body"
      color="white"
      placeholderTextColor="gray.300"
      _focus={{
        borderWidth: 1,
        borderColor: 'primary.500',
        bg: 'gray.700',
      }}
    />
  );
}
