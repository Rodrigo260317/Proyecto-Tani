import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(auth)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="(citas)" options={{ headerShown: false }} />
          <Stack.Screen name="(notas)" options={{ headerShown: false }} />
          <Stack.Screen name="(soporte)" options={{ headerShown: false }} />
          <Stack.Screen name="(aprende)" options={{ headerShown: false }} />
          <Stack.Screen name="mi-carnet" options={{ headerShown: false }} />
          <Stack.Screen name="notificaciones" options={{ headerShown: false }} />
          <Stack.Screen name="perfil" options={{ headerShown: false }} />
          <Stack.Screen name="politica" options={{ headerShown: false }} />
          <Stack.Screen name="terminos" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
