import { StyleSheet, Text, View, TextInput, Button, Image, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ResultadoScreen from './screens/ResultadoScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Resultado" component={ResultadoScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
