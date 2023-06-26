import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  HStack,
  Text,
  VStack,
  Circle,
  Pressable,
} from 'native-base';

import { Feather } from '@expo/vector-icons';

export default function ChooseModule() {
  const navigation = useNavigation();

  const vaiParaTelaInventario = () => {
    navigation.navigate('inventario');
  };
  return (
    <Pressable onPress={vaiParaTelaInventario}>
      <HStack
        bg="gray.600"
        mt={4}
        alignItems="center"
        rounded="sm"
        overflow="hidden"
      >
        <Circle bg="gray.500" h={10} w={10} ml={5}>
          <Feather name="arrow-left" size={24} color="#fff" />
        </Circle>

        <VStack flex={1} my={6} alignItems="center" mr={10}>
          <Text color="white" fontSize="lg">
            Inventário
          </Text>
        </VStack>
      </HStack>
    </Pressable>
  );
}
