import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
import axios from 'axios';
export default function EditarContatoScreen({ route, navigation, contatos, setContatos }) {
  const { contato } = route.params;

  const [nome, setNome] = useState(contato.nome);
  const [email, setEmail] = useState(contato.email);
  const [telefone, setTelefone] = useState(contato.telefone);

  function alterar() {
  if (!nome || !email || !telefone) {
      alert("Preencha todos os campos");
      return;
    }

    axios.put(`http://192.168.1.108:3001/contatos/${contato.id}`, {
      ...contato,
      nome,
      email,
      telefone
    })
    .then(() => {
      alert("Contato atualizado!");
      navigation.navigate('ListaContatos');
    })
    .catch(error => console.log(error));
  }

  function excluirContato() {
    axios.delete(`http://192.168.1.108:3001/contatos/${contato.id}`)
      .then(() => {
        alert("Contato excluído!");
        navigation.navigate('ListaContatos');
      })
      .catch(error => console.log(error));
  }

  return  (
    <View style={styles.container}>
      <TextInput style={styles.input} value={nome} onChangeText={setNome} />
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} value={telefone} onChangeText={setTelefone} />

      <TouchableOpacity style={styles.alterar} onPress={alterar}>
        <Text style={styles.text}>Alterar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.excluir} onPress={excluir}>
        <Text style={styles.text}>Excluir</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 30 },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
  },
  alterar: {
    backgroundColor: "#2E6DD8",
    padding: 12,
    alignItems: "center",
    marginBottom: 10,
  },
  excluir: {
    backgroundColor: "red",
    padding: 12,
    alignItems: "center",
  },
  text: {
     color: "#fff",
     fontWeight: "bold"
     },
});