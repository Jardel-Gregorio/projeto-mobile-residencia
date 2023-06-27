import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import { AuthProvider } from './src/Hooks/useAuth';

import Routes from './src/routes';

export default function App() {
  return (
    <SafeAreaView>
      <View style={{ height: '100%' }}>
        <StatusBar style="auto" />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </View>
    </SafeAreaView>

  );
}
