import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Login } from '../screens/Login';
import { AppRoutes } from './app.routes';

export function Routes() {

    useEffect(() => {

    },[])

    return (
        <NavigationContainer>
            <AppRoutes />
        </NavigationContainer>
    )
}