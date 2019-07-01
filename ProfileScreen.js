import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class ProfileScreen extends React.Component {

  static navigationOptions = {
    title: 'Profile',
  };
  gotoHome = () => {
    const { navigation } = this.props
    navigation.navigate('Home')
  }
  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Profile Screen</Text>
            <Text onPress={() => this.gotoHome()}>Back To Home</Text>
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
  },
});