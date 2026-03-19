import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import axios from 'axios';
export default function CadastroScreen({ navigation }) {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function salvarUsuario() {
   
    if (!nome || !cpf || !email || !senha) {
      alert("Preencha todos os campos");
      return;
    }

    axios.post('http://192.168.1.108:3001/usuarios', {
      nome,
      cpf,
      email,
      senha
    })
    .then(() => {
      alert("Usuário cadastrado com sucesso!");
      navigation.navigate('Login');
    })
    .catch(error => console.log(error));
  }

  return(
    <View style={styles.container}>
      
      {/* Header Azul com botão voltar */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Usuário</Text>
      </View>

      <View style={styles.form}>
        <Text>nome</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
        />

        <Text>cpf</Text>
        <TextInput
          style={styles.input}
          value={cpf}
          onChangeText={setCpf}
        />

        <Text>email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <Text>senha</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity style={styles.button} onPress={salvarUsuario}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2E6DD8",
    padding: 15,
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
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});