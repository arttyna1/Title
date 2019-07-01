import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default class LoginEN extends React.Component {
  
    static navigationOptions = {
      title: 'LoginEN',
    };
    gotoHome = () => {
      const { navigation } = this.props
      navigation.navigate('Home')
    }
    render(){
      return(
        <View style={styles.container}>
          <Text style={styles.text}>Login English</Text>
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