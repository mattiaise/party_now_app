import { Stack, useNavigation } from "expo-router";
import { TouchableOpacity } from "react-native";
import { ArrowLeft } from "lucide-react";

export default function CreateLayout() {
  const navigation = useNavigation();

  return (
    <Stack>
      <Stack.Screen name="index"
        options={{
          title: "Crea",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 10, marginRight: 5 }}>
              <ArrowLeft size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
}
