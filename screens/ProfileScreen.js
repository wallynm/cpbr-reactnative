import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native'


import { observer, inject } from "mobx-react/native"
@inject("UserStore")
@observer
export default class ProfileScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  logoutHandler = () => {
    console.log(this.props)
    this.props.UserStore.logout()
    this.props.navigation.navigate('Auth')
  }
  
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{this.props.UserStore.user.name}</Text>
              <Text style={styles.info}>{this.props.UserStore.user.role} / {this.props.UserStore.user.city}</Text>
              <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
              
              <TouchableOpacity style={styles.buttonContainer} onPress={this.logoutHandler}>
                <Text>Logout</Text>  
              </TouchableOpacity>
            </View>
        </View>
      </View>
    )
  }
}

const text = {
  margin: 20,
  fontSize: 20,
  fontWeight: 'bold',
  textAlign: 'center',
  color: '#34495e',
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:100,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:50
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    alignItems: 'center',
    padding:30,
  },
  name:{
    ...text,
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    ...text,
    fontSize:16,
    color: "#00BFFF"
  },
  description:{
    ...text,
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
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
