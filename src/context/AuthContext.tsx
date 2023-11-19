import { createContext, useState } from 'react';
import { User } from '../types/user';
import { api } from '../config/api';
import { AppError } from '../utils/AppError';

interface AuthContextData {
  user: User;
  loading: boolean;
  error: boolean;
  signIn: ({ email, password }: SignInCredentials) => Promise<void>;
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
        email,
        password,
      });

      setUser(data.user);
    } catch (error) {
      setError(true);

      const isAppError = error instanceof AppError;

      const message = isAppError
        ? error.message
        : 'Falha na autenticação, verifique suas credenciais.';

      console.log(message);
      // MOSTRAR TOAST
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
