 <div align="center">
  <img src="./assets/banner-chatinho.png" alt="Banner CHATinho" width="100%" />

  ![React Native](https://img.shields.io/badge/React_Native-F472B6?style=flat-square&logo=react&logoColor=white)
  ![Expo](https://img.shields.io/badge/Expo-EC4899?style=flat-square&logo=expo&logoColor=white)
</div>

## Sobre o projeto

O **CHATinho** é um aplicativo de mensagens desenvolvido em React Native com Expo, como atividade da disciplina de Desenvolvimento Mobile.

O projeto simula conversas entre contatos, permitindo visualizar mensagens e enviar novas mensagens. O objetivo é colocar em prática navegação entre telas, uso de componentes e separação de responsabilidades no código.

## Funcionalidades

- Lista de contatos na tela inicial.
- Navegação entre contatos e conversas.
- Exibição de mensagens enviadas e recebidas.
- Campo para digitar e enviar mensagens.
- Armazenamento das mensagens em memória.

## Estrutura do projeto

```text
src/
  screens/
    HomeScreen.js
    ChatScreen.js
  components/
    Mensagem.js
  services/
    MensagemService.js
  repositories/
    MensagemRepository.js
App.js
```

## Como executar

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/eduarda-freitass/CHATinho.git
cd CHATinho
npm install
npx expo start
```

Depois, abra o aplicativo usando o **Expo Go**.