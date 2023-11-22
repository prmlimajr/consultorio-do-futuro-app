type Services = {
  id: string;
  name: string;
  description: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
};

type UserClinic = {
  id: string;
  name: string;
  legalName: string;
  cnpj: string;
  owner: {
    id: string;
    name: string;
    phone: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
  };
};

export type User = {
  id: string;
  name: string;
  phone: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  role: {
    id: string;
    name: string;
  };
  clinics: UserClinic[];
  services: Services[];
};
