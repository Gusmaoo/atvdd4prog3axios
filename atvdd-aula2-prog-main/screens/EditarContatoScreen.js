import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
import axios from 'axios';

// IMPORTANTE: Altere este IP para o IP da sua maquina na rede local
const API_URL = 'http://192.168.1.108:3001';

export default function EditarContatoScreen({ route, navigation, contatos, setContatos }) {
  const { contato } = route.params;

  const [nome, setNome] = useState(contato.nome);
  const [email, setEmail] = useState(contato.email);
  const [telefone, setTelefone] = useState(contato.telefone);

  function alterar() {
    if (!nome || !email || !telefone) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }

    axios.put(`${API_URL}/contatos/${contato.id}`, {
      ...contato,
      nome,
      email,
      telefone
    })
    .then(() => {
      Alert.alert("Sucesso", "Contato atualizado!");
      navigation.navigate('ListaContatos');
    })
    .catch(error => {
      console.log(error);
      Alert.alert("Erro", "Erro ao atualizar contato");
    });
  }

  function excluir() {
    Alert.alert(
      "Confirmar exclusao",
      "Deseja realmente excluir este contato?",
      [
        { text: "Cancelar", style: "cancel" },
        { 
          text: "Excluir", 
          style: "destructive",
          onPress: () => {
            axios.delete(`${API_URL}/contatos/${contato.id}`)
              .then(() => {
                Alert.alert("Sucesso", "Contato excluido!");
                navigation.navigate('ListaContatos');
              })
              .catch(error => {
                console.log(error);
                Alert.alert("Erro", "Erro ao excluir contato");
              });
          }
        }
      ]
    );
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
