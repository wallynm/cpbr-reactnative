import { observable } from 'mobx';

class PetStore {
  @observable listAnimals = [{
    id: 1,
    title: "Mel",
    time: "2018-08-01 12:15 pm",
    image: "https://amigonaosecompra.s3.amazonaws.com/uploads/photo/image/28150/wide_Mel_21-10_1.jpg",
    description: "Olá, me chamo Mel. Tenho 3 anos e há 2 vivo em um abrigo. Nunca tive um lar, me resgataram das ruas prenha, meus bebês foram adotados e eu continuo sem uma família. Me ajudem compartilhando minha foto e minha história até chegar meu final feliz. Sou castrada, vacinada e vermifugada, porte M (= mix de Labrador). Sou extremamente dócil e me dou bem com outros dogs. "
  }, {
    id: 6,
    title: "Manolo",
    time: "2018-08-01 12:15 pm",
    image: "https://amigonaosecompra.s3.amazonaws.com/uploads/photo/image/27596/wide_manolo.jpg",
    description: "Manolo foi achado no lixo pelo meu filho quando era recém nascido. Ele deu de presente para a avó que havia ficado viúva. Ela cuidou bem e ele se tornou esse lindo gatão. Agora, ela está com 80 anos e problemas de saúde e não consegue mais cuidar dele como antes. O bichinho está ressentido, triste e um pouco agressivo. Precisamos com urgência de uma lar tranquilo e amoroso para o Manolo!"
  }, {
    id: 2,
    title: "Prince",
    time: "2018-08-12 12:00 pm",
    image: "https://amigonaosecompra.s3.amazonaws.com/uploads/photo/image/28110/wide_PRINCE_DIVULG.jpg",
    description: "Prince foi resgatado de maus tratos, estava bem judiado. Foi tratado, está castrado e vacinado. É dócil, carinhoso, mas não aceita outros animais. Somente para São Paulo e região."
  }, {
    id: 8,
    title: "Garfild",
    time: "2017-08-05 12:21 pm",
    image: "https://amigonaosecompra.s3.amazonaws.com/uploads/photo/image/27748/wide_20181102_111238.jpg",
    description: "Ele é um gato muito independente e calmo, preciso doar porque tenho muitos gatos e estamos ficando com renite. Tenho duas crianças eestao ficando dpente por causa de pelos."
  }, {
    id: 3,
    title: "Penelope",
    time: "2017-08-05 12:21 pm",
    image: "https://amigonaosecompra.s3.amazonaws.com/uploads/photo/image/28106/wide_fullsizeoutput_1801.jpeg",
    description: "Penélope é uma linda filhote boazinha e brincalhona. Tem 5 meses, ficará de porte médio, será doada castrada, vacinada e vermifugada."
  }, {
    id: 4,
    title: "Brenda",
    time: "2015-08-12 12:00 pm",
    image: "https://amigonaosecompra.s3.amazonaws.com/uploads/photo/image/28108/wide_fullsizeoutput_12fb.jpeg",
    description: "Brenda é dócil, muito alegre, brincalhona e carente. Tem 3 anos, lindos pelos longos é de porte pequeno (do tamanho de um Shihtzu), pesa 8kg, está castrada, vacinada e vermifugada."
  }, {
    id: 5,
    title: "Thor",
    time: "2013-06-12 12:11 pm",
    image: "https://amigonaosecompra.s3.amazonaws.com/uploads/photo/image/28097/wide_Thor-madona__11__-_Copia_-_Copia.jpg",
    description: "Thor é dócil, muito alegre, carente e convive bem com fêmeas. Tem 4 anos, é de porte grande, está castrado, vacinado e vermifugado."
  }]
  
  /**
  * Indicates wheather the 
  */
  @observable isRefresing = false;
}

export default new PetStore()