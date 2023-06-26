import React from 'react';
import { Button as ButtonNativeBase, Heading } from 'native-base';

export default function Button({ title }) {
  return (
    <ButtonNativeBase
      bg="primary.700"
      h={14}
      fontSize="sm"
      rounded="sm"
      _pressed={{ bg: 'primary.500' }}
    >
      <Heading color="white" fontSize="sm">
        {title}
      </Heading>
    </ButtonNativeBase>
  );
}
