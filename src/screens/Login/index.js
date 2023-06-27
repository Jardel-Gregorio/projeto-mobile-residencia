import React, { useState } from 'react';
import { Alert } from 'react-native';

import Button from '../../components/Button';
import Container from '../../components/ContainerMain';
import Input from '../../components/Input';
import Title from '../../components/Tittle';

// import Logo from '../../assets/logo_workers_primary.svg';

import { useAuth } from '../../Hooks/useAuth';

export default function Login() {
  const { login } = useAuth();

  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  async function fazLogin() {
    if (!usuario || !senha) {
      return Alert.alert('Entrar', 'Informe usuário e senha.');
    }

    const user = await login(usuario, senha);

    if (user) {
      return user;
    }

    return Alert.alert('ENTRAR', 'Usuário ou senha inválidos.');
  }

  return (
    <Container pt={100}>
      {/* <Logo /> */}
      <Title text="Acesse sua conta" />
      <Input
        title="Login"
        placeholder="Digite seu login"
        text={usuario}
        setText={setUsuario}
      />
      <Input
        password
        title="Senha"
        placeholder="Digite sua senha"
        text={senha}
        setText={setSenha}
      />
      <Button title="Entrar" acao={() => fazLogin()} />
    </Container>
  );
}
