import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import axios from 'axios';

export default function ListaContatosScreen({ navigation }) {
  const [contatos, setContatos] = useState([]);

  useEffect(() => {
    carregarContatos();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      carregarContatos();
    });
    return unsubscribe;
  }, [navigation]);

  function carregarContatos() {
    axios.get('http://192.168.1.108:3001/contatos')
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
    paddingTop: 50,
  },
  headerText: { color: "#fff", fontWeight: "bold", fontSize: 18 },
  plus: { color: "#fff", fontSize: 22 },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  nome: { fontWeight: "bold" },
});
