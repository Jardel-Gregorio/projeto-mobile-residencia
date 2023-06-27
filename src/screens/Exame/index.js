import React from 'react';
import { Text } from 'react-native';

import Container from '../../components/ContainerMain';
import Header from '../../components/Header';

// import Logo from "../../assets/logo_workers_secondary.svg";

export default function Exame() {
  return (
    <>
      <Header nome="Exame" />
      <Container>
        <Text>
          Exame
        </Text>
      </Container>
    </>
  );
}
