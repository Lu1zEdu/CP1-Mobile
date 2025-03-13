import { View, Text, StyleSheet } from "react-native";

export default function TratandoOsDados({ nome, preco, porcentagem }) {
    const precoNum = parseFloat(preco);
    const porcentagemNum = parseFloat(porcentagem);

    if (isNaN(precoNum) || isNaN(porcentagemNum)) {
        return <Text style={styles.erro}>Erro no cálculo. Verifique os valores inseridos.</Text>;
    }

    const aumento = (precoNum * porcentagemNum) / 100;
    const novoPreco = precoNum + aumento;

    return (
        <View style={styles.container}>
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
        marginTop: 20,
        padding: 15,
        borderRadius: 5,
        backgroundColor: '#dff0d8',
        width: '90%',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    texto: {
        fontSize: 16,
    },
    erro: {
        color: 'red',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
