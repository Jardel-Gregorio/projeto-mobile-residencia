import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Agendamento from '../screens/Agendamento';
import Exame from '../screens/Exame';
import DetalheExame from '../screens/Exame/detalheExame';
import NovoExame from '../screens/Exame/novoExame';
import Inicial from '../screens/Inicial';
import Login from '../screens/Login';
import Unidade from '../screens/Unidade';
import DetalheUnidade from '../screens/Unidade/detalheUnidade';
import NovaUnidade from '../screens/Unidade/novaUnidade';

const { Navigator, Screen } = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="login"
    >
      <Screen name="agendamento" component={Agendamento} />
      <Screen name="exame" component={Exame} />
      <Screen name="detalheExame" component={DetalheExame} />
      <Screen name="novoExame" component={NovoExame} />
      <Screen name="inicial" component={Inicial} />
      <Screen name="login" component={Login} />
      <Screen name="unidade" component={Unidade} />
      <Screen name="detalheUnidade" component={DetalheUnidade} />
      <Screen name="novaUnidade" component={NovaUnidade} />
    </Navigator>
  );
}
