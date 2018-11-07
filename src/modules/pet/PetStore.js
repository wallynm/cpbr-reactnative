import { observable } from 'mobx';

class PetStore {
  @observable listAnimals = [
    {id:1, title: "Lorem ipsum dolor",                  time:"2018-08-01 12:15 pm", image:"https://lorempixel.com/400/200/nature/6/", description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean  ligula..."},
    {id:2, title: "Sit amet, consectetuer",             time:"2018-08-12 12:00 pm", image:"https://lorempixel.com/400/200/nature/5/", description:"Lorem  dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula..."} ,
    {id:3, title: "Dipiscing elit. Aenean ",            time:"2017-08-05 12:21 pm", image:"https://lorempixel.com/400/200/nature/4/", description:"Lorem ipsum dolor sit , consectetuer  elit. Aenean commodo ligula..."}, 
    {id:4, title: "Commodo ligula eget dolor.",         time:"2015-08-12 12:00 pm", image:"https://lorempixel.com/400/200/nature/6/", description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula..."}, 
    {id:5, title: "Aenean massa. Cum sociis",           time:"2013-06-12 12:11 pm", image:"https://lorempixel.com/400/200/sports/1/", description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  commodo ligula..."}, 
    {id:6, title: "Natoque penatibus et magnis",        time:"2018-08-12 12:56 pm", image:"https://lorempixel.com/400/200/nature/8/", description:"Lorem ipsum  sit amet, consectetuer adipiscing elit. Aenean commodo ligula..."}, 
    {id:7, title: "Dis parturient montes, nascetur",    time:"2018-08-12 12:33 pm", image:"https://lorempixel.com/400/200/nature/1/", description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula..."}, 
    {id:8, title: "Ridiculus mus. Donec quam",          time:"2018-06-12 12:44 pm", image:"https://lorempixel.com/400/200/nature/3/", description:"Lorem ipsum  sit amet, consectetuer adipiscing elit.  commodo ligula..."},
    {id:9, title: "Felis, ultricies nec, pellentesque", time:"2012-07-12 12:23 pm", image:"https://lorempixel.com/400/200/nature/4/", description:"Lorem ipsum dolor sit amet, consectetuer  elit. Aenean commodo ligula..."},
  ]

  /**
 * Indicates wheather the 
 */
  @observable isRefresing = false;
}

export default new PetStore()