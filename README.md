--- WORKSHOP ---
1. Criar pasta

2. $ npm install -g create-react-native-app expo-cli

3. Explicar o que é o Expo & expo-cli

4. $ create-react-native-app cpbr-reactnative

5. Install UI
  $ yarn add react-native-elements

6. $ yarn add mobx mobx-react

```

7. Iniciar projet
   $ yarn start


8. Definição do APP e escopos:
```
MiauDote
  - Adote/Doe
  - Chat
  - Perfil

  Adote/Doe
    Abas com as seguintes opções:
    Adote
      Cards com os animais para adoção
    Favoritos
      Animais marcados como favorito no app
    Doe
      Listagem dos animais cadastrados para adoção

  Perfil
    Nome
    email
    senha
    confirmação de senha
    Foto de perfil

  Chat
    Local onde os usuários possam trocar informação sobre o animalzinho
```

9. Added Header into View section
```
import { Header } from 'react-native-elements'

<Header
  placement="left"
  centerComponent={{ text: 'MiauDote', style: { color: '#fff' } }}
/>
```
