import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login';
import Inicial from '../screens/Inicial';

const { Navigator, Screen } = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="login"
    >
      <Screen name="login" component={Login} />
      <Screen name="inicial" component={Inicial} />
    </Navigator>
  );
}
