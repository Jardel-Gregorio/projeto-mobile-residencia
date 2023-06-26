import { useState } from "react";
import { HStack, IconButton, VStack, useTheme, Text } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

import Logo from "../../assets/logo_workers_secondary.svg";
import {
  InventoryCard,
  InventoryCardProps,
} from "../../components/InventoryCard";
import { PropertyCard, PropertyCardProps } from "../../components/PropertyCard";
import { Filter } from "../../components/Filter";
import { ChooseModule } from "../../components/ChooseModule";
import { Alert } from "react-native";

export function Inicial() {
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
        <Logo width={180} />

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
