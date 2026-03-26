import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ScrollView,
} from 'react-native';
import axios from 'axios';

// IMPORTANTE: Altere este IP para o IP da sua maquina na rede local
const API_URL = 'http://192.168.1.108:3001';

export default function EsqueceuSenhaScreen({ navigation }) {
  const [email, setEmail] = useState('');

  function handleEnviar() {
    if (!email) {
      Alert.alert("Erro", "Digite seu email");
      return;
    }

    axios.get(`${API_URL}/usuarios?email=${email}`)
      .then(response => {
        if (response.data.length > 0) {
          Alert.alert("Sucesso", "Email encontrado! Instrucoes enviadas (simulacao)");
        } else {
          Alert.alert("Erro", "Email nao cadastrado");
        }
      })
      .catch(error => {
        console.log(error);
        Alert.alert("Erro", "Erro ao conectar com servidor");
      });
  }

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Esqueceu a senha</Text>
            <Text style={styles.subtitle}>
              Digite seu email para receber instruções
            </Text>
          </View>

          {/* Formulário */}
          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite seu email"
                placeholderTextColor="#999"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
              />
            </View>

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
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    maxWidth: 400,
    width: '100%',
    alignSelf: 'center',
    paddingVertical: 40,
  },
  header: {
    marginBottom: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  form: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputContainer: {
    marginBottom: 25,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#f9f9f9',
  },
  enviarButton: {
    backgroundColor: '#FF9500',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  enviarButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  voltarButton: {
    backgroundColor: 'transparent',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  voltarButtonText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
