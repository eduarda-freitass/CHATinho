import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';

const SIMBOLOS = ['♡', '☆', '✧', '❀', '○'];
const CELULA = 64;

// Fundo rosa com desenhos espalhados, parecido com o do WhatsApp
export default function PapelDeParede({ children }) {
  const { width, height } = useWindowDimensions();
  const colunas = Math.ceil(width / CELULA) + 1;
  const linhas = Math.ceil(height / CELULA) + 1;

  const desenhos = [];
  for (let linha = 0; linha < linhas; linha++) {
    for (let coluna = 0; coluna < colunas; coluna++) {
      const i = linha * colunas + coluna;
      const deslocamento = linha % 2 === 0 ? 0 : CELULA / 2;
      const rotacao = ((i * 37) % 50) - 25;

      desenhos.push(
        <Text
          key={i}
          style={[
            styles.simbolo,
            {
              left: coluna * CELULA + deslocamento - CELULA / 2,
              top: linha * CELULA,
              transform: [{ rotate: `${rotacao}deg` }]
            }
          ]}
        >
          {SIMBOLOS[(linha * 2 + coluna) % SIMBOLOS.length]}
        </Text>
      );
    }
  }

  return (
    <View style={styles.fundo}>
      <View style={StyleSheet.absoluteFill} pointerEvents="none">
        {desenhos}
      </View>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: '#FFF1F2',
    overflow: 'hidden'
  },
  simbolo: {
    position: 'absolute',
    width: CELULA,
    height: CELULA,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 22,
    lineHeight: CELULA,
    color: '#F9CDDA'
  }
});