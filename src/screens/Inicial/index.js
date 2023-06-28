import React from 'react';
import { Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

import Container from '../../components/ContainerMain';
import ContainerDouble from '../../components/ContainerDouble';
import Header from '../../components/Header';
import ModuleCard from '../../components/ModuleCard';

// import Logo from "../../assets/logo_workers_secondary.svg";

export default function Inicial() {
  const route = useRoute();
  const { login } = route.params.user;
  return (
    <>
      <Header nome="Inicial" />
      <Container>
        <Text style={{
          width: '100%', color: 'white', justifyContent: 'flex-start', fontSize: 16,
        }}
        >
          {`Olá, ${login}`}
        </Text>
        <ContainerDouble>
          <ModuleCard nome="Exame" rota="exame" icon="vial" />
          <ModuleCard nome="Unidade" rota="unidade" icon="map-marked-alt" />
        </ContainerDouble>
        <ContainerDouble>
          <ModuleCard nome="Agendamento" rota="agendamento" icon="calendar-alt" />
        </ContainerDouble>
      </Container>
    </>
  );
}
