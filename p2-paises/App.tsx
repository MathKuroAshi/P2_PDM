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
  const [nomeComum, setNomeComum] = useState('')
  const [nomeOficial, setNomeOficial] = useState('')
  const [traduzidoRusso, setTraduzidoRusso] = useState('')
  const [foto, setFoto] = useState('')

  const procuraNome = async () => {
    const resposta = await fetch(`https://restcountries.com/v3.1/name/${nome}`)

    const dados = await resposta.json()
    setNomeComum(dados[0].name.common)
    setNomeOficial(dados[0].name.official)
    setTraduzidoRusso(dados[0].translations.rus.common)
    setFoto(dados[0].maps.openStreetMaps)
  }

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
          <Text style={styles.buttonText}>PROCURAR PAÍS</Text>
      </Pressable>
      <View style={styles.result}>
          <Text style={styles.title}>RESULTADO DA PROCURA</Text>
          <View style={styles.resultDiv}>
            <Text style={styles.label}>Nome comum: {nomeComum}</Text>
            <Text style={styles.label}>Nome oficial: {nomeOficial}</Text>
            <Text style={styles.label}>Nome em russo: {traduzidoRusso}</Text>
            <Text style={styles.label}>Foto do país: {foto}</Text>
          </View>
      </View>
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
  label: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 6
  },
  result:{
    alignItems: 'center',
    marginTop: 8,
    paddingVertical: 24,
    width: '80%'
  },
  resultDiv: {
    backgroundColor: '#0F172A',
    borderColor: 'gray',
    borderRadius: 4,
    borderWidth: 1,
    padding: 16,
    width: '80%',
  },
  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  }
});