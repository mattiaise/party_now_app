import { Tabs } from "expo-router";


export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="(home)" options={{ title: "Home" }} />
      <Tabs.Screen name="(create)" options={{title: "Crea", tabBarStyle: {display: "none"}, headerShown: false}} />
      <Tabs.Screen name="(profile)" options={{ title: "Profile" }} />
    </Tabs>
  );
}
