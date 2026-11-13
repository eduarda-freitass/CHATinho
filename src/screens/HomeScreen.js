
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function HomeScreen({navigation}) {

  const contatos =[
    {id: 1, nome: 'Clara'},
    {id: 2, nome: 'Duda'},
    {id: 3, nome: 'Kayla'},
    {id: 4, nome: 'Duarte'},
    {id: 5, nome: 'Gaviotas'},
  ];

  return (
    <View style={styles.container}>
      { contatos.map((contato) => (
        <TouchableOpacity
        key={contato.id}
        style={styles.contato}
        onPress={() => navigation.navigate('Chat', {
        contatoId: contato.id,
        nome: contato.nome
        }
    )
}
        >

        <Text style={styles.nome}>{contato.nome}</Text>
        </TouchableOpacity>
      )
    )
}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF1F2',
    padding: 15
  },
  contato:{
    backgroundColor: '#FBCFE8',
    padding: 20,
    marginBottom: 10,
    borderRadius: 8
  },
  nome: {
    fontSize: 18,
    color: '#831843'
  }
}
);
