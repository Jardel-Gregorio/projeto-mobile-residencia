import React, {
  createContext, useContext, useMemo, useState,
} from 'react';

import api from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);

  async function login(usuario, senha) {
    setLoading(true);
    try {
      const { data: user } = await api.post('/api/login/', {
        login: usuario,
        senha,
      });

      setLoading(false);
      return user;
    } catch (error) {
      setLoading(false);
      return false;// new Promise((resolve, reject) => reject(new Error("Credenciais inválidas.")));
    }
  }

  const authContextValue = useMemo(() => ({
    loading,
    login,
  }), [loading, login]);

  return (
    <AuthContext.Provider
      value={authContextValue}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
