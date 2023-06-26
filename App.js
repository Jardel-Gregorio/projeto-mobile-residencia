import { NativeBaseProvider, StatusBar } from "native-base";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { THEME } from './src/styles/theme';

import { AuthProvider } from "./src/Hooks/useAuth";

import { Routes } from './src/routes';
import { Login } from './src/screens/Login';

import { Loading } from './src/components/Loading';

export default function App() {
  const [ fonteCarregada ] = useFonts({ Roboto_400Regular, Roboto_700Bold })
  
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      { fonteCarregada 
        ? (
          <AuthProvider>
            <Routes />
          </AuthProvider>
          )
        : <Loading />
      }
    </NativeBaseProvider>
  );
}


