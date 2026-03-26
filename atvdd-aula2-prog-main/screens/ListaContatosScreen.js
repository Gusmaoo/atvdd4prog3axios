import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

export default function ListaContatosScreen({ navigation, contatos, setContatos }) {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>←</Text>
        </TouchableOpacity>
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
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Nenhum contato cadastrado</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#2E6DD8",
    padding: 15,
    paddingTop: 50,
  },
  headerText: { color: "#fff", fontWeight: "bold", fontSize: 18 },
  back: { color: "#fff", fontSize: 22 },
  plus: { color: "#fff", fontSize: 22 },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  nome: { fontWeight: "bold", fontSize: 16 },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 50,
  },
  emptyText: {
    color: "#999",
    fontSize: 16,
  },
});
