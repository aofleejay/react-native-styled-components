import React from 'react';
import { StyleSheet, View } from 'react-native'
import Button from './src/Button'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button onPress={() => alert('Clicked!')}>
          Click Here!
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
