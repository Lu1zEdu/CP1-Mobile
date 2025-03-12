import { StyleSheet, Text, View , TextInput , Button , Image} from 'react-native';
import TratandoOsDados from './components/TratandoOsDados'
import { useState } from 'react';

export default function App() {
    const [nome , setNome] = useState('');
    const [preco , setPreco] = useState('');
    const [preconovo , setPreconovo] = useState('');
    const [porcentagem , setPorcentagem] = useState('');
    const[mostrarDados,setMostrarDados] = useState(false)
    return(
        <View style={styles.container}>
            <Image
              style={styles.imagem}
              source={require('./assets/view-table-with-articles-food-family.jpg')}
            />
            <View>
                <Text>CP1 Mobile Application Developer</Text>
                <Text>RM 555213 - Luiz Eduardo Da Silva Pinto</Text>
            </View>
            <Text>Digitar o nome do produto</Text>
            <TextInput
            placeholder='Nome do Produto'
            style={styles.input}
            value={nome}
            maxLength={100}
            onChangeText={(value) => setNome(value)}
            />
            <Text>valor original do produto</Text>
            <TextInput
            placeholder='valor original do produto'
            style={styles.input}
            value={preco}
            maxLength={10}
            keyboardType="decimal-pad"
            onChangeText={(value) => setPreco(value)}
            />
            <Text> digitar a porcentagem do aumento</Text>
            <TextInput
            placeholder='valor porcentagem'
            style={styles.input}
            value={porcentagem}
            maxLength={10}
            keyboardType="numeric"
            onChangeText={(value) => setPorcentagem(value)}
            />
            <Button
            title='Clique aqui para tratar os dados'
            color={'#000'}
            onPress={()=>setMostrarDados(true)}
            />
            {mostrarDados&&<TratandoOsDados nome={nome} preco={preco} porcentagem={porcentagem} preconovo={preconovo}/>}
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    TextColor:'#000'
  },imagem: {
    resizeMode: 'center',
    width: 250,
    height:250
  },
});