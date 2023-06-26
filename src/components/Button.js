import { Button as ButtonNativeBase, Heading } from 'native-base';

export function Button({title, ...rest}) {
  return (
    <ButtonNativeBase
        bg="primary.700"
        h={14}
        fontSize="sm"
        rounded="sm"
        _pressed={{ bg: "primary.500" }}
        {...rest}
    >
        <Heading color="white" fontSize="sm">
            {title}
        </Heading>
    </ ButtonNativeBase>
  );>
}
