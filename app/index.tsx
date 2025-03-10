import React from "react";
import { View, Text } from "react-native";

import BottomNavBar from "../components/BottomNavBar"; 
import TopNavBar from "../components/TopNavBar";


const App = () => {
  return (
    <View>
        <TopNavBar />
        <BottomNavBar />   
    </View>
  );
};

export default App;
