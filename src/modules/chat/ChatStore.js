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
const chatRef = db.ref("chat");


import { observable } from 'mobx';
import UserStore from 'app/src/modules/user/UserStore'

class ChatStore {
  addMessage(message) {
    chatRef.set({
      username: name,
      email: email,
      profile_picture : imageUrl
    });
  }


  @observable messages = [
    {id:1, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit amet"},
    {id:2, date:"9:50 am", type:'out', message: "Lorem ipsum dolor sit amet"} ,
    {id:3, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"}, 
    {id:4, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"}, 
    {id:5, date:"9:50 am", type:'out', message: "Lorem ipsum dolor sit a met"}, 
    {id:6, date:"9:50 am", type:'out', message: "Lorem ipsum dolor sit a met"}, 
    {id:7, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"}, 
    {id:8, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"},
    {id:9, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"},
  ]
}

export default new ChatStore()