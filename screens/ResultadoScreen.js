import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function ResultadoScreen({ route, navigation }) {
    const { nome, preco, porcentagem } = route.params;

    const precoNum = parseFloat(preco);
    const porcentagemNum = parseFloat(porcentagem);

    if (isNaN(precoNum) || isNaN(porcentagemNum)) {
        return <Text style={styles.erro}>Erro no cálculo. Verifique os valores inseridos.</Text>;
    }

    const aumento = (precoNum * porcentagemNum) / 100;
    const novoPreco = precoNum + aumento;

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.voltar}>
                <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
            <Text style={styles.titulo}>Resumo do Cálculo</Text>
            <Text style={styles.texto}>Nome do Produto: {nome}</Text>
            <Text style={styles.texto}>Valor Original: R$ {precoNum.toFixed(2)}</Text>
            <Text style={styles.texto}>Aumento: {porcentagemNum}%</Text>
            <Text style={styles.texto}>Valor do Aumento: R$ {aumento.toFixed(2)}</Text>
            <Text style={styles.texto}>Novo Valor: R$ {novoPreco.toFixed(2)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dff0d8',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    voltar: {
        position: 'absolute',
        top: 40,
        left: 20,
        backgroundColor: '#1E90FF',
        padding: 10,
        borderRadius: 50,
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    texto: {
        fontSize: 18,
        marginVertical: 5,
    },
    erro: {
        color: 'red',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
