import api from '../services/api';

export default async function AutenticaUsuario(login, senha) {
  try {
    const user = await api.post('/api/login', {
      login,
      senha,
    });

    return user;
  } catch (error) {
    return false;
  }
}
