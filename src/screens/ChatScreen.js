
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import mensagemService from '../services/MensagemService';

export default function ChatScreen({ route }) {

  const { contatoId, nome } = route.params;

  const [mensagens, setMensagens] = useState(
    mensagemService.getMensagens(contatoId)
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Conversa com {nome}</Text>

      <FlatList
        data={mensagens}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={[
            styles.mensagem,
            item.recebida ? styles.recebida : styles.enviada
          ]}>
            <Text>{item.texto}</Text>
          </View>
        )}
      />
    </View>
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
  mensagem: {
    padding: 12,
    marginBottom: 10,
    borderRadius: 10,
    maxWidth: '80%'
  },
  recebida: {
    backgroundColor: '#FFFFFF',
    alignSelf: 'flex-start'
  },
  enviada: {
    backgroundColor: '#F9A8D4',
    alignSelf: 'flex-end'
  }
});
