import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert
} from "react-native";

export default function CadastroScreen({ navigation, usuarios, setUsuarios }) {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function salvarUsuario() {
    if (!nome || !cpf || !email || !senha) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }

    const novoUsuario = {
      id: usuarios.length + 1,
      nome,
      cpf,
      email,
      senha
    };

    setUsuarios([...usuarios, novoUsuario]);
    Alert.alert("Sucesso", "Usuario cadastrado com sucesso!");
    navigation.navigate('Login');
  }

  return(
    <View style={styles.container}>
      
      {/* Header Azul com botao voltar */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Usuario</Text>
      </View>

      <View style={styles.form}>
        <Text>Nome</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
        />

        <Text>CPF</Text>
        <TextInput
          style={styles.input}
          value={cpf}
          onChangeText={setCpf}
        />

        <Text>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text>Senha</Text>
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
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
