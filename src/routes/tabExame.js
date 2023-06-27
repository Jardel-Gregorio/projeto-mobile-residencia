import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';

import TelaA from '../screens/Exame';
import TelaB from '../screens/Exame/detalheExame';

const Tab = createBottomTabNavigator();

export default function TabExame({ route }) {
  const { name } = route;

  const getIconName = () => {
    switch (name) {
      case 'TelaA':
        return 'list';
      case 'TelaB':
        return 'info';
      default:
        return null;
    }
  };

  const renderIcon = ({ color, size }) => {
    const iconName = getIconName();
    return <FontAwesome5 name={iconName} size={size} color={color} />;
  };

  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'blue',
        showLabel: true,
        tabBarIcon: () => renderIcon(),
      }}
      initialRouteName="TelaA"
    >
      <Tab.Screen
        name="TelaA"
        component={TelaA}
      />
      <Tab.Screen
        name="TelaB"
        component={TelaB}
      />
    </Tab.Navigator>
  );
}
