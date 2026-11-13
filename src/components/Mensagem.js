import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Exibe uma mensagem
export default function Mensagem({ mensagem, recebida }) {
  return (
    <View style={[styles.balao, recebida ? styles.recebida : styles.enviada]}>
      <Text style={styles.texto}>{mensagem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  balao: {
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
  },
  texto: {
    color: '#831843'
  }
});