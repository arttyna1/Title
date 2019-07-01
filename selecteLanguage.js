import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default class selecteLanguage extends React.Component {

static navigationOptions = {
    title: 'SelectLan',
  };

  gotologinTH = () => {
    const { navigation } = this.props
    navigation.navigate('LoginTH')
  }
  gotologinEN = () => {
    const { navigation } = this.props
    navigation.navigate('LoginEN')
  }

  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>SelecteLanguage</Text>
            <Button style={styles.btn} title='ภาษาไทย' onPress={() => this.gotologinTH()}/>
            <Button style={styles.btn} title='English' onPress={() => this.gotologinEN()}/>
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
  btn: {
      margin: 20,
  },
});