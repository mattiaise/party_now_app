import { Stack, useNavigation } from "expo-router";
import { TouchableOpacity, View, Image } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function ProfileLayout() {
  const navigation = useNavigation();

  return (
    <Stack>
      <Stack.Screen name="index"
        options={{	
          title: "",
          headerLeft: () => (
            <View>
                <Image 
                    source={require('./../../../assets/images/favicon.png')} 
                    style={{ width: 24, height: 24, marginLeft: 20 }} />
            </View>
          ),
          headerRight: () => (
            <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ marginLeft: 5, marginRight: 20 }}>
                <FontAwesome name="bullhorn" size={24} color="gray" />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: 5, marginRight: 20 }}>
                <FontAwesome name="cog" size={24} color="gray" />
            </TouchableOpacity>
          </View>
          )
        }}
      />
    </Stack>
  );
}
