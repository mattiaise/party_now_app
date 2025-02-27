import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const LandingPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Party Now!</Text>
    </View>
  )
}

export default LandingPage  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  text: {
    color: 'white',
    fontSize: 45,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 100,
  },
})