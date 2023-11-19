import { createContext, useState } from 'react';
import { User } from '../types/user';
import { api } from '../config/api';
import { AppError } from '../utils/AppError';
import Toast from 'react-native-toast-message';

interface AuthContextData {
  user: User;
  loading: boolean;
  error: boolean;
  signIn: ({ email, password }: SignInCredentials) => Promise<boolean>;
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
  const [error, setError] = useState(false);

  async function signIn({ email, password }: SignInCredentials) {
    try {
      setLoading(true);
      setError(false);

      const { data } = await api.post('/auth', {
        email: email.trim().toLowerCase(),
        password,
      });

      setUser(data.user);

      return true;
    } catch (error) {
      setError(true);

      const isAppError = error instanceof AppError;

      const message = isAppError
        ? error.message
        : 'Falha na autenticação, verifique suas credenciais.';

      Toast.show({
        type: 'error',
        text1: message,
        onPress: () => Toast.hide(),
      });

      return false;
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthContext.Provider value={{ user, loading, error, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
