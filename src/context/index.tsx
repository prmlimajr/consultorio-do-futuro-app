import { ReactNode } from 'react';
import { ClinicProvider } from './ClinicContext';
import { AuthProvider } from './AuthContext';

type ContextProviderProps = {
  children: ReactNode;
};

export function ContextProvider({ children }: ContextProviderProps) {
  return (
    <ClinicProvider>
      <AuthProvider>{children}</AuthProvider>
    </ClinicProvider>
  );
}
