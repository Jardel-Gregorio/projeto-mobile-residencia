import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Agendamento from '../screens/Agendamento';
import Exame from '../screens/Exame';
import Inicial from '../screens/Inicial';
import Login from '../screens/Login';
import Unidade from '../screens/Unidade';

const { Navigator, Screen } = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="login"
    >
      <Screen name="agendamento" component={Agendamento} />
      <Screen name="exame" component={Exame} />
      <Screen name="inicial" component={Inicial} />
      <Screen name="login" component={Login} />
      <Screen name="unidade" component={Unidade} />
    </Navigator>
  );
}
