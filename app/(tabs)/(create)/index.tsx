import { View, Text, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import React from 'react';

const BasicRoute = () => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: 50 }}>
      <Text>Basic Create</Text>
    </View>
);
  
const AdvancedRoute = () => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: 50 }}>
        <Text>Advanced create</Text>
    </View>
);

const renderScene = SceneMap({
    first: BasicRoute,
    second: AdvancedRoute
});

const routes = [
    { key: 'first', title: 'Basic create' },
    { key: 'second', title: 'Advanced create' }
];

export default function Create () {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);

    return (
        <View> 
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}/>
        </View>
    );
};
