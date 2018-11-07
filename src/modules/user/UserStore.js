import { observable } from 'mobx';

class UserStore {

    /**
     * Posts URI Host.
     */
    POSTS_URI = 'https://jsonplaceholder.typicode.com';

    /**
   * Indicates wheather the 
   */
    @observable isRefresing = false;
}

export default new UserStore()