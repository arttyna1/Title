import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default class LoginTH extends React.Component {
  
    static navigationOptions = {
      title: 'LoginTH',
    };

    gotoHome = () => {
        const { navigation } = this.props
        navigation.navigate('Home')
      }


    render(){
      return(
        <View style={styles.container}>
          <Text style={styles.text}>Login ไทย</Text>
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