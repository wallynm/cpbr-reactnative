import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList,
  Button
} from 'react-native'
import { observer, inject } from "mobx-react/native"

@inject("ChatStore", "UserStore")
@observer
export default class ChatScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props)
    this.state = {
      message: ''
    }
  }

  renderDate = (date) => {
    return(
      <Text style={styles.time}>
        {date}
      </Text>
    )
  }

  addZero = (i) => {
      if (i < 10) {
          i = "0" + i;
      }
      return i;
  }

  convertDate = () => {
      var d = new Date();
      var h = this.addZero(d.getHours());
      var m = this.addZero(d.getMinutes());
      var s = this.addZero(d.getSeconds());
      return h + ":" + m + ":" + s;
  }



  messageSendHandler = () => {
    this.props.ChatStore.addMessage(this.state.message)
    this.setState({
      message: ''
    })
  }

  render() {
    const { messages } = this.props.ChatStore

    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          data={messages}
          keyExtractor= {(item) => {
            return item.id.toString()
          }}
          renderItem={(message) => {
            console.log(item)
            const item = message.item
            let inMessage = item.username === this.props.UserStore.user.name
            let itemStyle = inMessage ? styles.itemIn : styles.itemOut
            return (
              <View style={[styles.item, itemStyle]}>
                {!inMessage && this.renderDate(this.convertDate(item.date))}
                <View style={[styles.balloon]}>
                  <Text>{item.message}</Text>
                </View>
                {inMessage && this.renderDate(item.date)}
              </View>
            )
          }}/>
        <View style={styles.footer}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Write a message..."
                underlineColorAndroid='transparent'
                onChangeText={(message) => this.setState({message})}/>
          </View>

            <TouchableOpacity style={styles.btnSend} onPress={this.messageSendHandler}>
              <Image source={{uri:"https://png.icons8.com/small/75/ffffff/filled-sent.png"}} style={styles.iconSend}/>
            </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  list:{
    paddingHorizontal: 17,
  },
  footer:{
    flexDirection: 'row',
    height:60,
    backgroundColor: '#eeeeee',
    paddingHorizontal:10,
    padding:5,
  },
  btnSend:{
    backgroundColor:"#00BFFF",
    width:40,
    height:40,
    borderRadius:360,
    alignItems:'center',
    justifyContent:'center',
  },
  iconSend:{
    width:30,
    height:30,
    alignSelf:'center',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    height:40,
    flexDirection: 'row',
    alignItems:'center',
    flex:1,
    marginRight:10,
  },
  inputs:{
    height:40,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  balloon: {
    maxWidth: 250,
    padding: 15,
    borderRadius: 20,
  },
  itemIn: {
    backgroundColor: '#687fff',
    color:'#FFF',
    alignSelf: 'flex-start'
  },
  itemOut: {
    alignSelf: 'flex-end'
  },
  time: {
    alignSelf: 'flex-end',
    margin: 15,
    fontSize:12,
    color:"#808080",
  },
  item: {
    marginVertical: 14,
    flex: 1,
    flexDirection: 'row',
    backgroundColor:"#eeeeee",
    borderRadius:300,
    padding:5,
  },
})  