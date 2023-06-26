import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import {
  HStack, IconButton, VStack, useTheme,
} from 'native-base';

// import Logo from "../../assets/logo_workers_secondary.svg";

import ChooseModule from '../../components/ChooseModule';

export default function Inicial() {
  const { colors } = useTheme();

  return (
    <VStack flex={1} pb={4} bg="gray.700">
      <HStack
        w="full"
        justifyContent="space-between"
        alignItems="center"
        pt={12}
        pb={5}
        px={6}
      >
        {/* <Logo width={180} /> */}

        <IconButton
          icon={
            <MaterialIcons name="logout" size={26} color={colors.gray[300]} />
          }
        />
      </HStack>

      <VStack px={8}>
        <ChooseModule />
        <ChooseModule />
        <ChooseModule />
      </VStack>
    </VStack>
  );
}
