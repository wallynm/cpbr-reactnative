import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  View,
  AsyncStorage,
  TextInput,
  Alert
} from 'react-native';



import { observer, inject } from "mobx-react/native"
@inject("UserStore")
@observer
export default class SignInScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      role: 'Desenvolvedor',
      city: 'BH',
    }
  }
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Please sign in</Text>

        <TextInput
          style={{height: 40}}
          placeholder="Username"
          onChangeText={(user) => this.setState({user})}
        />

        <TextInput
          style={{height: 40}}
          placeholder="Cargo"
          onChangeText={(role) => this.setState({role})}
        />

        <TextInput
        style={{height: 40}}
        placeholder="Cidade"
        onChangeText={(city) => this.setState({city})}
      />

        <Button style={styles.buttonContainer} title="Sign in!" onPress={this._signInAsync} />
      </View>
    )
  }

  _signInAsync = () => {
    this.props.UserStore.setUserData('token', 'abc')
    this.props.UserStore.setUserData('name', this.state.user)
    this.props.UserStore.setUserData('role', this.state.role)
    this.props.UserStore.setUserData('city', this.state.city)
    if(this.state.user === '') {
      return Alert.alert("Preencha um usuário")    
    }
    this.props.navigation.navigate('App')
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 50
  },
  header: {
    fontSize: 30,
    marginBottom: 30
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
})