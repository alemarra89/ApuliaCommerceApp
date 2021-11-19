import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native';
import { Product } from './src/model/Product';
import AggiungiScreen from './src/pages/AggiungiScreen';
import DettaglioProdottoScreen from './src/pages/DettaglioProdottoScreen';
import ElencoProdottiScreen from './src/pages/ElencoProdottiScreen';
import HomeScreen from './src/pages/HomeScreen';

export type TabType = {
  Home: undefined,
  Prodotti: undefined,
  Aggiungi: undefined
}

const Tab = createBottomTabNavigator<TabType>();

export type StackType = {
  ElencoProdotti: undefined
  DettaglioProdotto: {
    prodotto: Product
  }
}
const Stack = createNativeStackNavigator<StackType>();

const ProdottiStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ElencoProdotti" component={ElencoProdottiScreen} options={{ title: "Elenco prodotti" }} />
      <Stack.Screen name="DettaglioProdotto" component={DettaglioProdottoScreen} />
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ unmountOnBlur: true }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: () => (
              <Text>🏠</Text>
            )
          }}
        />
        <Tab.Screen
          name="Prodotti"
          component={ProdottiStack}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Text>🍎</Text>
            )
          }}
        />
        <Tab.Screen
          name="Aggiungi"
          component={AggiungiScreen}
          options={{
            title: "Aggiungi prodotto",
            tabBarIcon: () => (
              <Text>➕</Text>
            )
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
