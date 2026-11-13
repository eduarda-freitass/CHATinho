<div align="center">
  <img src="assets/logo-chatinho.jpg" alt="Logo do CHATinho" width="520">

  ![React Native](https://img.shields.io/badge/React_Native-F472B6?style=flat-square&logo=react&logoColor=white)
  ![Expo](https://img.shields.io/badge/Expo-EC4899?style=flat-square&logo=expo&logoColor=white)
</div>

## 🩷 Sobre

O **CHATinho** é um aplicativo simples de mensagens, inspirado no WhatsApp, desenvolvido com **React Native e Expo** para praticar navegação entre telas, passagem de parâmetros, componentes reutilizáveis e organização em camadas.

## 🌸 Requisitos da atividade

- **HomeScreen:** pelo menos 4 contatos, com nome e opção de abrir a conversa, passando ID e nome.
- **ChatScreen:** nome do contato, lista de mensagens, recebidas à esquerda e enviadas à direita, campo e botão de envio. O campo é limpo após enviar e mensagens vazias não são aceitas.
- **Mensagem:** componente reutilizável com `mensagem` e `recebida`.
- **MensagemRepository:** armazenamento em array (`id`, `contatoId`, `texto`, `recebida`), com `getMensagens()` e `adicionarMensagem()`.
- **MensagemService:** regras de negócio com `getMensagens()` e `enviarMensagem()`, usando uma única instância.
- **Navegação:** React Navigation com Stack Navigator, `navigation.navigate()` e `route.params`.

As mensagens ficam **em memória**, sem API, MQTT ou banco de dados. Cada conversa exibe apenas suas mensagens; não é necessário mantê-las após reiniciar o aplicativo.

## 📁 Estrutura

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

## 🎀 Como executar

```bash
git clone https://github.com/eduarda-freitass/CHATinho.git
cd CHATinho
npm install
npx expo start
```

Abra o aplicativo pelo **Expo Go**.
