import { useState } from 'react';
import {
  Pressable,
  StyleSheet, 
  Text, 
  TextInput, 
  View 
} from 'react-native';

export default function App() {

  const [nome, setNome] = useState('')
  const [resultado, setResultado] = useState(null)

  const procuraNome = async () => {
    const resposta = await fetch(`https://restcountries.com/v3.1/name/${nome}`);

    const dados = await resposta.json();
      setResultado(dados[0]);
      console.log(dados[0]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PROCURAR PAÍSES/CAPITAIS</Text>
      <TextInput
      style={styles.input}
      placeholder="Digite o nome do local"
      value={nome}
      onChangeText={setNome}
      />
      <Pressable style={styles.button} onPress={procuraNome}>
          <Text style={styles.buttonText}>PROCURAR</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    button: {
    alignItems: 'center',
    backgroundColor: '#64748B',
    borderRadius: 4,
    marginTop: 8,
    padding: 12,
    width: '80%',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold'
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#0F172A',
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  input: {
    borderColor: 'gray',
    borderRadius: 4,
    borderWidth: 1,
    color: 'white',
    marginBottom: 12,
    padding: 12,
    textAlign: 'center',
    width: '80%'
  },
  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  }
});