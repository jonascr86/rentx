import React from 'react';
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

import { Home } from './src/sreens/Home';
import theme from './src/styles/theme';
import { CarDetails } from './src/sreens/CarDetails';

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
      <CarDetails/>
    </ThemeProvider>
  )
}
