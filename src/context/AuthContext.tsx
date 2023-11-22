import { createContext, useEffect, useState } from 'react';
import { User } from '../types/user';
import { api } from '../config/api';
import { AppError } from '../utils/AppError';
import Toast from 'react-native-toast-message';
import {
  storageUserGet,
  storageUserRemove,
  storageUserSave,
} from '../storage/storageUser';

interface AuthContextData {
  user: User;
  loading: boolean;
  signIn: ({ email, password }: SignInCredentials) => Promise<void>;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

interface AuthProviderProps {
  children: React.ReactNode;
}

interface SignInCredentials {
  email: string;
  password: string;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState({} as User);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadUserData();
  }, []);

  async function loadUserData() {
    try {
      setLoading(true);

      const loggedUser = await storageUserGet();

      if (loggedUser) {
        setUser(loggedUser);
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Falha ao carregar usuário logado. Faça login novamente.',
        onPress: () => Toast.hide(),
      });
    } finally {
      setLoading(false);
    }
  }

  async function signIn({ email, password }: SignInCredentials) {
    try {
      setLoading(true);

      const { data } = await api.post('/auth', {
        email: email.trim().toLowerCase(),
        password,
      });

      setUser(data.user);

      storageUserSave(data.user);
    } catch (error) {
      const isAppError = error instanceof AppError;

      const message = isAppError
        ? error.message
        : 'Falha na autenticação. Tente novamente mais tarde.';

      Toast.show({
        type: 'error',
        text1: message,
        onPress: () => Toast.hide(),
      });
    } finally {
      setLoading(false);
    }
  }

  async function signOut() {
    try {
      setLoading(true);

      setUser({} as User);

      await storageUserRemove();
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Falha ao sair da conta. Tente novamente.',
        onPress: () => Toast.hide(),
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
