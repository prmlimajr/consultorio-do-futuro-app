export type Clinic = {
  id: string;
  name: string;
  legalName?: string;
  cnpj?: string;
  owner: ClinicOwner;
  address?: Address;
  contacts?: ClinicContact[];
  logo?: ClinicLogo;
  settings?: ClinicSettings;
};

type Address = {
  id: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
  createdAt: Date;
  updatedAt: Date;
};

type ClinicContact = {
  id: string;
  contact: string;
  type: string;
};

type ClinicSettings = {
  id: string;
  theme: {
    COLORS: {
      BACKGROUND: {
        WHITE: string;
        GRAY_100: string;
        GRAY_300: string;
      };
      TEXT: {
        GRAY_1000: string;
        GRAY_900: string;
        GRAY_600: string;
        GRAY_300: string;
        WHITE: string;
      };
      HIGHLIGHT_COLOR: string;
    };
    FONT_FAMILY: {
      REGULAR: string;
      SEMI: string;
      BOLD: string;
    };
    FONT_SIZE: {
      SM: string;
      LG: string;
      XL: string;
    };
  };
};

type ClinicLogo = {
  id: string;
  name: string;
  path: string;
  mimetype: string;
  createdAt: Date;
};

type ClinicOwner = {
  id: string;
  name: string;
  phone: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
};
