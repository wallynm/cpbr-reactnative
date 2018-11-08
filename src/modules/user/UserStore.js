import { action, observable } from 'mobx';
import {
  AsyncStorage
} from 'react-native';
class UserStore {
  
  @action
  setUserData = async (key, val) => {
    this.user[key] = val
    await AsyncStorage.setItem(key, val)
  }

  getUserData = async (key) => {
    return await AsyncStorage.getItem(key)
  }

  logout = async() => {
    await AsyncStorage.removeItem('token')
    this.user.token = ''
  }
  
  @observable user = {
    name: null,
    token: null
  }
}

export default new UserStore()