import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  
const [tarefaAtual, setTarefaAtual] = useState('');
const [listaTarefas, setListaTarefas] = useState([]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>App de Controle de Tarefas e Anotações de Campo!</Text> 
      
      <View style={styles.view}>
        <TextInput style={styles.input} value={tarefaAtual} onChangeText={setTarefaAtual}   placeholder="Digite a anotação..." />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setListaTarefas(() => [...listaTarefas, tarefaAtual]);
            setTarefaAtual('');
          }}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {listaTarefas.map((tarefa, index) => (
          <Text key={index}>{tarefa}</Text>
        ))}
      </ScrollView>
       


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 23,
    fontWeight: 'bold',
    padding: 35
  },
  input: {
    flex: 1,
    height: 48,
    padding: 14,
    borderRadius: 10,
    borderColor: '#1dc0dd',
    borderWidth: 2,
    fontSize: 16,
  },
  button: {
    width: 56,
    height: 48,
    marginLeft: 10,
    padding: 14,
    borderRadius: 10,
    backgroundColor: '#167a81',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  view: {
    flexDirection: 'row',
    width: 340,
    paddingHorizontal: 24,
  }
});
