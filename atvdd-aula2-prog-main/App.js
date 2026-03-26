import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./screens/LoginScreen";
import CadastroScreen from "./screens/CadastroScreen";
import ListaContatosScreen from "./screens/ListaContatosScreen";
import CadastroContatoScreen from "./screens/CadastroContatoScreen";
import EditarContatoScreen from "./screens/EditarContatoScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CadastroUsuario" component={CadastroScreen} />
        <Stack.Screen name="ListaContatos" component={ListaContatosScreen} />
        <Stack.Screen name="CadastroContato" component={CadastroContatoScreen} />
        <Stack.Screen name="EditarContato" component={EditarContatoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
