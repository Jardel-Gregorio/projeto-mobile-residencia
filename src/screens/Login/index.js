import { useState } from 'react';
import { Alert } from 'react-native';
import {  VStack, Heading, Icon } from  'native-base';
import { FontAwesome } from '@expo/vector-icons';

import Logo from '../../assets/logo_workers_primary.svg';

import { useAuth } from '../../Hooks/useAuth';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Login() {
    const { loading, login } = useAuth();

    const [ usuario, setUsuario ] = useState<string>('');
    const [ senha, setSenha ] = useState<string>('');

    async function fazLogin() {
        if (!usuario || !senha) {
            return Alert.alert('Entrar', 'Informe usuário e senha.');
        }

        const response = await login(usuario, senha);

        console.log(response.data);

        if (usuario === 'MOURA') {
            return Alert.alert('Entrar', 'Não é permitido a entrada de molezinha nesse aplicativo.');
        } else {
            Alert.alert('ENTRAR', `Usuário ou senha inválidos. ${usuario}`);
        }
    }
    
    return (
        <VStack 
            flex={1} 
            alignItems="center" 
            bg={"gray.600"} 
            px={8} 
            pt={24}
        >
            <Logo />

            <Heading 
                color="gray.100"
                fontSize="xl"
                mt={20}
                mb={6}
            >
                Acesse sua conta
            </Heading>

            <Input 
                mb={4}
                placeholder="Usuário"
                InputLeftElement={<Icon as={<FontAwesome name="user"/>} ml={4} />}
                value={usuario}
                onChangeText={(text) => setUsuario(text.toUpperCase())}
            />

            <Input 
                mb={8}
                placeholder="Senha"
                InputLeftElement={<Icon as={<FontAwesome name="key" />} ml={4} />}
                secureTextEntry
                onChangeText={setSenha}
            />

            <Button 
                title="Entrar" 
                w="full"
                isLoading={loading}
                onPress={fazLogin}
            />
        </VStack>
    )
}