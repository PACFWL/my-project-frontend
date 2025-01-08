import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { useColorScheme } from '@/hooks/useColorScheme';

// Previne a splash screen de sumir automaticamente
SplashScreen.preventAutoHideAsync();

// Importa seus componentes
import SplashScreenComponent from './screens/splash/SplashScreen'; 
import NotFoundScreen from './+not-found'; 
import TechInfoScreen from './screens/tech/TechInfoScreen'
import AuthorsScreen from './screens/authors/AuthorsScreen'
import LoginScreen from './screens/login/LoginScreen';
import SignupScreen from './screens/signUp/SignupScreen';
import DrawerNavigator from './(drawer)/DrawerNavigator'; 


const Stack = createStackNavigator();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [fontsLoaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreenComponent} />
        <Stack.Screen name="TechInfo" component={TechInfoScreen} />
        <Stack.Screen name="Auths" component={AuthorsScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Initial" component={DrawerNavigator} />
        <Stack.Screen name="NotFound" component={NotFoundScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
