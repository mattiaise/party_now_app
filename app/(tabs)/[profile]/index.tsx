import { View, Pressable, Text, useWindowDimensions, StyleSheet, ActivityIndicator, Image } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import React from 'react';

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
    const [index, setIndex] = React.useState(0);

  return (
        <View> {/* container */}
            <View> {/* immagine di profilo e descrizione */}
                <Pressable style={styles.imageContainerStyle}>
                {false ? (
                        <ActivityIndicator size="large" color="#000" />
                    ) : (
                        <Image
                            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                            style={{ width: 150, height: 150 }}
                        />
                    )}
                </Pressable>
                <View> {/* descrizione */}  

                </View>
            </View>
            <View> 
          	  <TabView
          	      navigationState={{ index, routes }}
          	      renderScene={renderScene}
          	      onIndexChange={setIndex}
          	      initialLayout={{ width: layout.width }}/>
          </View>
      </View>
  );

  
};

const styles = StyleSheet.create({
	container: {
		marginTop: 40,
		padding: 12,
		alignItems: "center",
		justifyContent: "center",
	},
	verticallySpaced: {
		paddingTop: 4,
		paddingBottom: 4,
		alignSelf: "stretch",
	},
	imageContainerStyle: {
		paddingTop: 4,
		paddingBottom: 4,
		alignSelf: "center",
	},
	mt20: {
		marginTop: 20,
	},
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		width: "auto",
	},
	text: {
		padding: 10,
		width: "auto",
	},
});