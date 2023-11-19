const { EXPO_PUBLIC_API_BASE_URL, EXPO_PUBLIC_CLINIC_ID } = process.env;

const APP_CONFIG = {
  clinicId: EXPO_PUBLIC_CLINIC_ID,
  apiBaseUrl: EXPO_PUBLIC_API_BASE_URL,
};

export { APP_CONFIG };
