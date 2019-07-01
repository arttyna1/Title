import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Home',
  };

  gotoSelect = () => {
    const { navigation } = this.props
    navigation.navigate('SelectLan')
  }

  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>SOOKJAI</Text>
            <Button title='NEXT' onPress={() => this.gotoSelect()}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#00FFFF'
  },
});