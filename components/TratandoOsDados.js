import { View , Text} from "react-native"


export default (props) => {
    let nome = props.nome
    let preco =props.preco
    let porcentagem = props.porcentagem
    let preconovo = parseFloat((preco * (porcentagem) )% 100)
    return(
        <View>
            <Text>Nome do produto :{nome}</Text>
            <Text>Valor do produto : {preco}</Text>
            <Text>Porcentagem : {porcentagem}</Text>
            <Text>Novo valor : {preconovo}</Text>
        </View>
    )
}