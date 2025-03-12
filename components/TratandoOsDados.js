import { View } from "react-native"


export default (props) => {
    var NovoPreco = props.preco - (props.porcentagem * 100 )
    return(
        <View>
            <Text>Nome do produto :{props.name}</Text>
            <Text>Valor do produto : {props.preco}</Text>
            <Text>Porcentagem : {props.porcentagem}</Text>
            <Text>Novo valor : {parseInt(NovoPreco)}</Text>
        </View>
    )
}