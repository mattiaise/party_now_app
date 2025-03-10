import "../global.css";

import { Stack } from "expo-router";


export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Nasconde l'intestazione dello stack
      }}
    />
  );
}
