import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import axios from 'axios';

// IMPORTANTE: Altere este IP para o IP da sua maquina na rede local
const API_URL = 'http://192.168.1.108:3001';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function logar() {
    if (!email || !senha) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }

    axios.get(`${API_URL}/usuarios`)
      .then(response => {
        const usuarios = response.data;

        const usuarioEncontrado = usuarios.find(
          u => u.email === email && u.senha === senha
        );

        if (usuarioEncontrado) {
          Alert.alert("Sucesso", "Login realizado!");
          navigation.navigate('ListaContatos');
        } else {
          Alert.alert("Erro", "Usuario ou senha invalidos");
        }
      })
      .catch(error => {
        console.log(error);
        Alert.alert("Erro", "Erro ao conectar com servidor");
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
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
        onPress={logar}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => navigation.navigate("CadastroUsuario")}
      >
        <Text style={styles.buttonText}>Cadastre-se</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate("EsqueceuSenha")}
      >
        <Text style={styles.forgotText}>Esqueceu a senha?</Text>
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
  forgotButton: {
    marginTop: 15,
    alignItems: "center",
  },
  forgotText: {
    color: "#2E6DD8",
    fontSize: 14,
  },
});
