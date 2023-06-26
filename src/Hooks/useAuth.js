import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import api from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({});

function AuthProvider({children}) {
    const [authenticated, setAuthenticated] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        (async () => {
        const token = localStorage.getItem("@DNACenter:token");

            if (token) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            try {
                await api.get("/api/verificaToken");
            } catch (e) {
                localStorage.clear();
                api.defaults.headers.common['Authorization'] = undefined;
                setLoading(false);
                return false
            }

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setAuthenticated(true);
            }

        setLoading(false);
        return null
        })();
    }, []);

    async function login(usuario, senha) {
        try {
            const { data : user } = await api.post("/api/softlab/validaCliente", {
                usuario,
                senha,
                url: "DnaWorkers"
            });

            await AsyncStorage.setItem("@DNAWorkers:codigoUsuario", user.data.codigo_usuario.trim());
            await AsyncStorage.setItem("@DNAWorkers:token", user.data.token);

            api.defaults.headers.common['Authorization'] = `Bearer ${user.data.token}`;

            setAuthenticated(true);

            return true
        } catch (error) {
            return false//new Promise((resolve, reject) => reject(new Error("Credenciais inválidas.")));
        }
    }

    async function logout() {
        try {
            setAuthenticated(false);
            localStorage.removeItem("@DNAWorkers:codigoUsuario");
            localStorage.removeItem("@DNAWorkers:token");
            api.defaults.headers.common['Authorization'] = undefined;
            return false;
        } catch (error) {
            return false //new Promise((resolve, reject) => reject(new Error("Falha na operação.")));
        }
        
    }
    return (
        <AuthContext.Provider 
            value={{ 
                authenticated, 
                loading, 
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth }
