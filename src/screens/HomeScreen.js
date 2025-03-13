import { StyleSheet, Text, View, TextInput, Button, Image, Alert } from 'react-native';
import { useState } from 'react';

export default function HomeScreen({ navigation }) {
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [porcentagem, setPorcentagem] = useState('');

    const calcular = () => {
        if (!nome || !preco || !porcentagem) {
            Alert.alert("Erro", "Todos os campos devem ser preenchidos!");
            return;
        }
        navigation.navigate('Resultado', { nome, preco, porcentagem });
    };

    return (
        <View style={styles.container}>
            <Image
                style={styles.imagem}
                source={require('../assets/view-table-with-articles-food-family.jpg')}
            />
            <Text style={styles.titulo}>CP1 Mobile Application Developer</Text>
            <Text style={styles.titulo}>RM 555213 - Luiz Eduardo Da Silva Pinto</Text>

            <Text style={styles.label}>Nome do Produto:</Text>
            <TextInput
                placeholder='Digite o nome do produto'
                style={styles.input}
                value={nome}
                maxLength={100}
                onChangeText={setNome}
            />

            <Text style={styles.label}>Valor Original do Produto:</Text>
            <TextInput
                placeholder='Digite o valor original'
                style={styles.input}
                value={preco}
                maxLength={10}
                keyboardType="numeric"
                onChangeText={setPreco}
            />

            <Text style={styles.label}>Porcentagem de Aumento:</Text>
            <TextInput
                placeholder='Digite a porcentagem'
                style={styles.input}
                value={porcentagem}
                maxLength={10}
                keyboardType="numeric"
                onChangeText={setPorcentagem}
            />

            <Button
                title='Calcular'
                color={'#1E90FF'}
                onPress={calcular}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    imagem: {
        resizeMode: 'contain',
        width: 250,
        height: 250,
        marginBottom: 20,
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
    },
    input: {
        width: '90%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
        backgroundColor: '#fff',
    },
});
