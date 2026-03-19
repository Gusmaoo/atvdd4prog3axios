import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image
} from "react-native";
import {FontAwesome} from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>

      <FontAwesome name="user-circle" size={100} color="#42454b" style={{width: 120, height: 120, alignSelf: "center", marginBottom: 30, borderRadius: 60 }} />

      <TextInput
        placeholder="Login"
        style={styles.input}
        value={login}
        onChangeText={setLogin}
      />

      <TextInput
        placeholder="Senha"
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
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 30,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 28,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold"
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 15,
    padding: 12,
    borderRadius: 8
  },
  loginButton: {
    backgroundColor: "#2E6DD8",
    padding: 14,
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 8
  },
  registerButton: {
    backgroundColor: "red",
    padding: 14,
    alignItems: "center",
    borderRadius: 8
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold"
  }
});