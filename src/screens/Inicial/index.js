import React from 'react';
import { Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

import Container from '../../components/ContainerMain';
import Header from '../../components/Header';

// import Logo from "../../assets/logo_workers_secondary.svg";

export default function Inicial() {
  const route = useRoute();
  const { login } = route.params.user;
  return (
    <>
      <Header nome="Inicial" />
      <Container>
        <Text>{`Olá, ${login}`}</Text>
      </Container>
    </>
  );
}
