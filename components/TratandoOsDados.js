import { View , Text} from "react-native"


export default (props) => {
    let Np = props.nome
    let Vp =props.preco
    let PP = props.porcentagem
    let Pn = parseInt((Vp * (PP) )% 100)
    return(
        <View>
            <Text>Nome do produto :{Np}</Text>
            <Text>Valor do produto : {Vp}</Text>
            <Text>Porcentagem : {PP}</Text>
            <Text>Novo valor : {parseInt(Pn)}</Text>
        </View>
    )
}