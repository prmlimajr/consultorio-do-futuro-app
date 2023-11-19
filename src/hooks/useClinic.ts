import { useContext } from 'react';
import { ClinicContext } from '../context/ClinicContext';

export function useClinic() {
  const context = useContext(ClinicContext);

  if (!context) {
    throw new Error('useClinic must be used within an ClinicProvider');
  }

  return context;
}
