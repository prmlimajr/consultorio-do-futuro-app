import { useCallback, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Text, View } from 'react-native';
import { DefaultTheme } from './types/theme.default';
import { api } from './config/api';
import { AppError } from './utils/AppError';
import { APP_CONFIG } from './config/app-config';
import { StatusBar } from 'expo-status-bar';
import { useClinic } from './hooks/useClinic';
import * as SplashScreen from 'expo-splash-screen';
import {
  useFonts,
  DMSans_400Regular,
  DMSans_400Regular_Italic,
  DMSans_500Medium,
  DMSans_500Medium_Italic,
  DMSans_700Bold,
  DMSans_700Bold_Italic,
} from '@expo-google-fonts/dm-sans';
import { Routes } from './routes';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

SplashScreen.preventAutoHideAsync();

export function Bootstrap() {
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const { clinic, setClinic } = useClinic();

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  useEffect(() => {
    const fetchClinicSettings = async () => {
      try {
        setLoading(true);
        setHasError(false);

        const { data } = await api.get(`/clinics/${APP_CONFIG.clinicId}`);

        setClinic(data);
      } catch (error) {
        setHasError(true);
        const isAppError = error instanceof AppError;

        const message = isAppError
          ? error.message
          : 'Falha no servidor. Tente novamente mais tarde.';

        Toast.show({
          type: 'error',
          text1: message,
          onPress: () => Toast.hide(),
        });
      } finally {
        setLoading(false);
      }
    };

    fetchClinicSettings();
  }, []);

  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_400Regular_Italic,
    DMSans_500Medium,
    DMSans_500Medium_Italic,
    DMSans_700Bold,
    DMSans_700Bold_Italic,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  } else {
    onLayoutRootView();
  }

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (hasError) {
    return (
      <View>
        <Text>Something went wrong</Text>
      </View>
    );
  }

  return (
    <ThemeProvider theme={clinic?.settings?.theme || DefaultTheme}>
      <StatusBar style="auto" backgroundColor="#FFF" translucent />

      <Routes />
    </ThemeProvider>
  );
}
