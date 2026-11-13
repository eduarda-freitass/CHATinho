import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StyleSheet
} from 'react-native';
import mensagemService from '../services/MensagemService';
import Mensagem from '../components/Mensagem';

export default function ChatScreen({ route }) {

  const { contatoId, nome } = route.params;

  const [mensagens, setMensagens] = useState(
    mensagemService.getMensagens(contatoId)
  );
  const [texto, setTexto] = useState('');

  function enviar() {
    // O Service ignora mensagens vazias ou só com espaços (retorna null)
    const enviada = mensagemService.enviarMensagem(contatoId, texto);

    if (!enviada) {
      return;
    }

    // Busca a lista atualizada para a mensagem aparecer na hora
    setMensagens(mensagemService.getMensagens(contatoId));
    setTexto('');
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={90}
    >
      <Text style={styles.titulo}>Conversa com {nome}</Text>

      <FlatList
        style={styles.lista}
        data={mensagens}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Mensagem mensagem={item.texto} recebida={item.recebida} />
        )}
      />

      <View style={styles.barraEnvio}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma mensagem"
          placeholderTextColor="#9D174D"
          value={texto}
          onChangeText={setTexto}
          onSubmitEditing={enviar}
        />
        <TouchableOpacity style={styles.botao} onPress={enviar}>
          <Text style={styles.botaoTexto}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#FFF1F2'
  },
  titulo: {
    fontSize: 18,
    marginBottom: 20,
    color: '#831843'
  },
  lista: {
    flex: 1
  },
  barraEnvio: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10
  },
  input: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
    color: '#831843'
  },
  botao: {
    backgroundColor: '#F472B6',
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 12
  },
  botaoTexto: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  }
});