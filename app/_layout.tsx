import { Stack } from "expo-router";


export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ title: "Tabs", headerShown:false }} />
      <Stack.Screen name="index" options={{ title: "Loading Screen" }} />
    </Stack>
  );
}
