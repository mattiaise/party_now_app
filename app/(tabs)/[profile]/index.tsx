import { 
  View, 
  Pressable, 
  Text, 
  useWindowDimensions, 
  StyleSheet, 
  ActivityIndicator, 
  Image, 
  Alert 
} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import React, { useState } from 'react';
import { launchImageLibrary } from 'react-native-image-picker';

const YourPartyRoute = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: 50 }}>
    <Text>📸 I tuoi party</Text>
  </View>
);

const SocialRoute = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: 50 }}>
    <Text>SVILUPPI FUTURI</Text>
  </View>
);

const renderScene = SceneMap({
  first: YourPartyRoute,
  second: SocialRoute
});

const routes = [
  { key: 'first', title: 'Le tue feste' },
  { key: 'second', title: 'Social' }
];

export default function Profile() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [profileImage, setProfileImage] = useState('https://reactnative.dev/img/tiny_logo.png');
  const [loading, setLoading] = useState(false);

  // Metodo per cambiare immagine
  const changeProfilePicture = () => {
      launchImageLibrary({ mediaType: 'photo', quality: 1 }, response => {
          if (response.didCancel) {
              Alert.alert('Operazione annullata');
          } else if (response.errorMessage) {
              Alert.alert('Errore', response.errorMessage);
          } else if (response.assets && response.assets.length > 0) {
            setProfileImage(response.assets?.[0]?.uri || '');
          }
      });
  };

  return (
    <View> 
    {/* Container per immagine di profilo e descrizione */}
    <View style={styles.container}>
        <View style={styles.profileContainer}>
            {/* Immagine di profilo */}
            <Pressable style={styles.imageContainerStyle} onPress={changeProfilePicture}>
                {loading ? (
                    <ActivityIndicator size="large" color="#000" />
                ) : (
                    <Image
                        source={{ uri: profileImage }}
                        style={{ width: 150, height: 150, borderRadius: 75 }}
                    />
                )}
            </Pressable>

            {/* Descrizione a destra dell'immagine */}
            <View style={styles.textContainer}>
                <Text style={styles.text}>Nome Utente</Text>
                <Text style={styles.text}>Descrizione breve del profilo.</Text>
            </View>
        </View>
    </View>
          
          {/* TabView */}
          <View> 
              <TabView
                  navigationState={{ index, routes }}
                  renderScene={renderScene}
                  onIndexChange={setIndex}
                  initialLayout={{ width: layout.width }}
              />
          </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
      padding: 12,
      alignItems: "center",
      justifyContent: "center",
  },
  profileContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  imageContainerStyle: {
      paddingTop: 4,
      paddingBottom: 4,
      alignSelf: "center",
  },
  textContainer: {
      marginLeft: 20, 
  },
  text: {
      padding: 10,
      textAlign: "center",
  }
});
