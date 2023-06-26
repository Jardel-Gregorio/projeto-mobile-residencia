import {
  Box,
  HStack,
  Text,
  VStack,
  useTheme,
  Circle,
  Pressable,
  IPressableProps,
} from "native-base";
import { FontAwesome } from "@expo/vector-icons";

export function InventoryCard({ data, ...rest }) {
  const { colors } = useTheme();

  const statusColor =
    data.status === "Em andamento" ? colors.secondary[700] : colors.green[300];

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
            Inventário {data.inventario}
          </Text>
          <HStack alignItems="center">
            <FontAwesome name="clock-o" size={15} color={colors.gray[300]} />
            <Text color="gray.200" fontSize="xs" ml={1}>
              {data.periodoInicio} à {data.periodoFim}
            </Text>
          </HStack>
        </VStack>
        <Circle bg="gray.500" h={12} w={12} mr={5}>
          {data.status === "Finalizado" ? (
            <FontAwesome name="check-circle" size={24} color={statusColor} />
          ) : (
            <FontAwesome name="warning" size={24} color={statusColor} />
          )}
        </Circle>
      </HStack>
    </Pressable>
  );
}