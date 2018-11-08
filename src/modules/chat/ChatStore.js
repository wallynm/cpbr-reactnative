import {
  AsyncStorage
} from 'react-native';

import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyANjjz2NwSojI9DHYLZpkiioBrGuoxNA84",
  authDomain: "miaudote-dev.firebaseapp.com",
  databaseURL: "https://miaudote-dev.firebaseio.com",
  projectId: "miaudote-dev",
  storageBucket: "gs://miaudote-dev.appspot.com",
  messagingSenderId: "186847935991",
};
firebase.initializeApp(config);
const database = firebase.database();
const chatRef = database.ref("chat");


import { observable, action } from 'mobx';
import UserStore from 'app/src/modules/user/UserStore'

class ChatStore {
  constructor() {
    chatRef.on('child_added', (data) => {
      this.pushMessage(data.key, data.val().message, data.val().username);
    })
  }

  @action
  pushMessage(id, message, username) {
    this.messages.push({
      id, username, message
    })
  }
  
  addMessage(message) {
    chatRef.push({
      username: UserStore.user.name,
      date: new Date(),
      message
    })
  }

  @observable messages = []

  // @observable messages = [
  //   {id:1, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit amet"},
  //   {id:2, date:"9:50 am", type:'out', message: "Lorem ipsum dolor sit amet"} ,
  //   {id:3, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"}, 
  //   {id:4, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"}, 
  //   {id:5, date:"9:50 am", type:'out', message: "Lorem ipsum dolor sit a met"}, 
  //   {id:6, date:"9:50 am", type:'out', message: "Lorem ipsum dolor sit a met"}, 
  //   {id:7, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"}, 
  //   {id:8, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"},
  //   {id:9, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"},
  // ]
}

export default new ChatStore()