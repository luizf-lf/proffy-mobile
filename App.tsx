import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Landing from './src/pages/Landing';
import AppLoading from 'expo-app-loading';
import {
  Archivo_400Regular,
  Archivo_700Bold,
  useFonts,
} from '@expo-google-fonts/archivo';
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';

export default function App() {
  //fontsLoaded retorna true quando todas as fontes forem carregadas
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  //enquanto as fontes não forem carregadas, retorna o componente de tela de carregamento (splash screen)
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <Landing />
        <StatusBar style="light" />
      </>
    );
  }
}
