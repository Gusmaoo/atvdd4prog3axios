import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import axios from 'axios';
export default function LoginScreen({ navigation }) {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
function logar() {
  axios.get('http://192.168.1.108:3001/usuarios')
    .then(response => {

      const usuarios = response.data;

      const usuarioEncontrado = usuarios.find(
        u => u.email === email && u.senha === senha
      );

      if (usuarioEncontrado) {
        alert("Login realizado!");
        navigation.navigate('ListaContatos');
      } else {
        alert("Usuário ou senha inválidos");
      }

    })
    .catch(error => {
      console.log(error);
      alert("Erro ao conectar com servidor");
    });
}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>

      <TextInput
        placeholder="login"
        style={styles.input}
        value={login}
        onChangeText={setLogin}
      />

      <TextInput
        placeholder="senha"
        style={styles.input}
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate("ListaContatos")}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => navigation.navigate("CadastroUsuario")}
      >
        <Text style={styles.buttonText}>Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 30 },
  title: { fontSize: 28, textAlign: "center", marginBottom: 40 },
  input: {
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  loginButton: {
    backgroundColor: "#2E6DD8",
    padding: 12,
    alignItems: "center",
    marginBottom: 10,
  },
  registerButton: {
    backgroundColor: "red",
    padding: 12,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
});