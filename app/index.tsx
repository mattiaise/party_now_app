import { useEffect } from "react";
import { useRouter } from "expo-router";
import { View, ActivityIndicator } from "react-native";

export default function LoadingScreen() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/(tabs)/home");
    }, 2000);
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-gray-900">
      <ActivityIndicator size="large" color="#facc15" />
    </View>
  );
}