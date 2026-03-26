import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./screens/LoginScreen";
import CadastroScreen from "./screens/CadastroScreen";
import ListaContatosScreen from "./screens/ListaContatosScreen";
import CadastroContatoScreen from "./screens/CadastroContatoScreen";
import EditarContatoScreen from "./screens/EditarContatoScreen";
import EsqueceuSenhaScreen from "./screens/EsqueceuSenhaScreen";
import { contatosMock, usuariosMock } from "./data/contatos";

const Stack = createNativeStackNavigator();

export default function App() {
  const [contatos, setContatos] = useState(contatosMock);
  const [usuarios, setUsuarios] = useState(usuariosMock);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login">
          {(props) => <LoginScreen {...props} usuarios={usuarios} />}
        </Stack.Screen>

        <Stack.Screen name="CadastroUsuario">
          {(props) => <CadastroScreen {...props} usuarios={usuarios} setUsuarios={setUsuarios} />}
        </Stack.Screen>

        <Stack.Screen name="EsqueceuSenha">
          {(props) => <EsqueceuSenhaScreen {...props} usuarios={usuarios} />}
        </Stack.Screen>

        <Stack.Screen name="ListaContatos">
          {(props) => (
            <ListaContatosScreen
              {...props}
              contatos={contatos}
              setContatos={setContatos}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="CadastroContato">
          {(props) => (
            <CadastroContatoScreen
              {...props}
              contatos={contatos}
              setContatos={setContatos}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="EditarContato">
          {(props) => (
            <EditarContatoScreen
              {...props}
              contatos={contatos}
              setContatos={setContatos}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
