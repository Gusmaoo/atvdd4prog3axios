import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import axios from 'axios';

// IMPORTANTE: Altere este IP para o IP da sua maquina na rede local
const API_URL = 'http://192.168.1.108:3001';

export default function ListaContatosScreen({ navigation, contatos, setContatos }) {
  
  useEffect(() => {
    carregarContatos();
  }, []);

  function carregarContatos() {
    axios.get(`${API_URL}/contatos`)
      .then(response => {
        setContatos(response.data);
      })
      .catch(error => console.log(error));
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Lista de Contatos</Text>
        <TouchableOpacity onPress={() => navigation.navigate("CadastroContato")}>
          <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={contatos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() =>
              navigation.navigate("EditarContato", { contato: item })
            }
          >
            <Text style={styles.nome}>{item.nome}</Text>
            <Text>{item.telefone}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#2E6DD8",
    padding: 15,
  },
  headerText: { color: "#fff", fontWeight: "bold", fontSize: 18 },
  plus: { color: "#fff", fontSize: 22 },
  item: {
    padding: 15,
    borderBottomWidth: 1,
  },
  nome: { fontWeight: "bold" },
});
