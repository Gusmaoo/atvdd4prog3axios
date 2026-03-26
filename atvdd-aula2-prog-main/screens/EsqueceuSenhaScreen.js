import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

export default function EsqueceuSenhaScreen({ navigation, usuarios }) {
  const [email, setEmail] = useState('');

  function handleEnviar() {
    if (!email) {
      Alert.alert("Erro", "Digite seu email");
      return;
    }

    const usuarioEncontrado = usuarios.find(u => u.email === email);

    if (usuarioEncontrado) {
      Alert.alert("Sucesso", "Email encontrado! Instrucoes enviadas (simulacao)");
    } else {
      Alert.alert("Erro", "Email nao cadastrado");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Esqueceu a Senha</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.subtitle}>
          Digite seu email para receber instrucoes de recuperacao de senha
        </Text>

        <View style={styles.form}>
          <Text>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TouchableOpacity 
            style={styles.enviarButton}
            onPress={handleEnviar}
          >
            <Text style={styles.enviarButtonText}>Enviar</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.voltarButton}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.voltarButtonText}>Voltar para o login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  content: {
    flex: 1,
    padding: 30,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  form: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  enviarButton: {
    backgroundColor: '#FF9500',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
  },
  enviarButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  voltarButton: {
    alignItems: 'center',
  },
  voltarButtonText: {
    color: '#2E6DD8',
    fontSize: 16,
  },
});
