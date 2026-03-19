import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function CadastroContatoScreen({ navigation, contatos, setContatos }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  function salvar() {
    const novoContato = {
      id: Date.now(),
      nome,
      email,
      telefone,
    };

    setContatos([...contatos, novoContato]);
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contato</Text>

      <TextInput placeholder="Nome" style={styles.input} onChangeText={setNome} />
      <TextInput placeholder="Email" style={styles.input} onChangeText={setEmail} />
      <TextInput placeholder="Telefone" style={styles.input} onChangeText={setTelefone} />

      <TouchableOpacity style={styles.button} onPress={salvar}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
     padding: 45,
     paddingBottom: 5,

},
  title: { 
    fontSize: 22,
    
     marginBottom: 20
 },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#2E6DD8",
    padding: 12,
    alignItems: "center",
  },
  buttonText: 
  { color: "#fff", 
    fontWeight: "bold" 

  },
});