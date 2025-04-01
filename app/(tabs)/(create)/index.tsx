import { View, Text, useWindowDimensions, TextInput, Button } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import React, {useState} from 'react';
import DateTimePicker, { DateType, useDefaultStyles } from 'react-native-ui-datepicker';



const BasicRoute = () => {
    const defaultStyles = useDefaultStyles();
    const [selected, setSelected] = useState<DateType>();

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: 50 }}>
            <Text>Party name</Text>
            <TextInput placeholder="Party name" style={{ borderWidth: 1, width: 200, padding: 5 }} />

            <Text>Party date</Text>
            {/* https://github.com/farhoudshapouran/react-native-ui-datepicker */}
            <DateTimePicker
                mode="single"
                date={selected}
                onChange={({ date }) =>  setSelected(date)}
                styles={defaultStyles}
            />
            <Button
                title="Submit"
                onPress={() => {
                    console.log("Party name and date submitted:", { name: "Party name", date: selected });
                }}
            />
        </View>
    );
};

  
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
