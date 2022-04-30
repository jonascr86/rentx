import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components'
import {
  useFonts, 
  Archivo_400Regular,
  Archivo_500Medium
} from '@expo-google-fonts/archivo'
import { 
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from '@expo-google-fonts/inter'

import { StackRoute } from './src/routes/stack.routes';
import theme from './src/styles/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_500Medium,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StackRoute/>
      </NavigationContainer>
    </ThemeProvider>
  )
}
