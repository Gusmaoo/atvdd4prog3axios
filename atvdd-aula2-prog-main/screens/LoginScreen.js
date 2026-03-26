import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import axios from 'axios';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function logar() {
    if (!email || !senha) {
      alert("Preencha todos os campos");
      return;
    }

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
      <Image
        source={{ uri: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y&s=150' }}
        style={styles.avatar}
      />

      <Text style={styles.title}>LOGIN</Text>

      <TextInput
        placeholder="email"
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    padding: 30,
    backgroundColor: "#fff"
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: "center",
    marginBottom: 20,
    backgroundColor: "#e0e0e0"
  },
  title: { 
    fontSize: 28, 
    textAlign: "center", 
    marginBottom: 40,
    fontWeight: "bold"
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  loginButton: {
    backgroundColor: "#2E6DD8",
    padding: 12,
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 5,
  },
  registerButton: {
    backgroundColor: "red",
    padding: 12,
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: { 
    color: "#fff", 
    fontWeight: "bold" 
  },
});
