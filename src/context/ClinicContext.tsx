import { createContext, useState } from 'react';
import { Clinic } from '../types/clinic';

interface ClinicContextData {
  clinic: Clinic;
  setClinic: (clinic: Clinic) => void;
}

export const ClinicContext = createContext<ClinicContextData>(
  {} as ClinicContextData,
);

interface ClinicProviderProps {
  children: React.ReactNode;
}

export const ClinicProvider: React.FC<ClinicProviderProps> = ({ children }) => {
  const [clinic, setClinic] = useState({} as Clinic);

  return (
    <ClinicContext.Provider value={{ clinic, setClinic }}>
      {children}
    </ClinicContext.Provider>
  );
};
