import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import axios from 'axios';

export default function CadastroContatoScreen({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  function salvar() {
    if (!nome || !email || !telefone) {
      alert("Preencha todos os campos");
      return;
    }

    axios.post('http://192.168.1.108:3001/contatos', {
      nome,
      email,
      telefone,
      usuarioId: 1
    })
    .then(() => {
      alert("Contato cadastrado!");
      navigation.navigate('ListaContatos');
    })
    .catch(error => console.log(error));
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Novo Contato</Text>
      </View>

      <View style={styles.form}>
        <Text>Nome</Text>
        <TextInput 
          placeholder="Digite o nome" 
          style={styles.input} 
          value={nome}
          onChangeText={setNome} 
        />
        
        <Text>Email</Text>
        <TextInput 
          placeholder="Digite o email" 
          style={styles.input} 
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        
        <Text>Telefone</Text>
        <TextInput 
          placeholder="Digite o telefone" 
          style={styles.input} 
          value={telefone}
          onChangeText={setTelefone}
          keyboardType="phone-pad"
        />

        <TouchableOpacity style={styles.button} onPress={salvar}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2E6DD8",
    padding: 15,
    paddingTop: 50,
  },
  back: {
    color: "#fff",
    fontSize: 20,
    marginRight: 15,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  form: {
    padding: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#2E6DD8",
    padding: 12,
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: { 
    color: "#fff", 
    fontWeight: "bold" 
  },
});
