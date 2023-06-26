import React from 'react';
import {
  Box, HStack, Text, VStack, useTheme, Circle, Pressable,
} from 'native-base';
import { FontAwesome } from '@expo/vector-icons';

export default function PropertyCard({ data, ...rest }) {
  const { colors } = useTheme();
  const {
    status, bem, descricao, adquiridoEm,
  } = data;

  const statusColor = (status === 'Pendente' ? colors.secondary[700] : colors.green[300]);

  return (
    <Pressable {...rest}>
      <HStack
        bg="gray.600"
        mb={4}
        alignItems="center"
        rounded="sm"
        overflow="hidden"
      >
        <Box h="full" w={2} bg={statusColor} />
        <VStack flex={1} my={5} ml={5}>
          <Text color="white" fontSize="md">
            Bem
            {' '}
            {bem}
          </Text>
          <HStack alignItems="center">
            <FontAwesome name="tag" size={15} color={colors.gray[300]} />
            <Text color="gray.200" fontSize="xs" ml={1}>
              {descricao}
            </Text>
          </HStack>
          <HStack alignItems="center">
            <FontAwesome name="clock-o" size={15} color={colors.gray[300]} />
            <Text color="gray.200" fontSize="xs" ml={1}>
              {adquiridoEm}
            </Text>
          </HStack>
        </VStack>
        <Circle bg="gray.500" h={12} w={12} mr={5}>
          {
                    status === 'Pendente'
                      ? <FontAwesome name="hourglass-2" size={22} color={statusColor} />
                      : <FontAwesome name="check-square-o" size={24} color={statusColor} />
                }

        </Circle>
      </HStack>
    </Pressable>
  );
}
