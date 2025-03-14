import { useState } from 'react';
import { StyleSheet, Text, Image, View,TextInput, Button } from 'react-native';
import TratandoOsDados from './components/TratandoOsDados';

export default function App(props) {

  const[valorProduto,setValorProduto]=useState('')
  const[nomeProduto,setNomeProduto]=useState('')
  const[porcentagemAumento,setPorcentagemAumento]=useState('')
  const[mostrarDados,setMostrarDados] = useState(false)
  const [erro, setErro] = useState('');

  const handleEnviar = () => {
    if (!nomeProduto || !valorProduto || !porcentagemAumento) {
      setErro('⚠️ Por favor, preencha todos os campos!');
      setMostrarDados(false);
    } else {
      setErro('');
      setMostrarDados(true);
    }
  };
  

  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.titulo}>RM555213 Luiz Eduardo Da Silva Pinto</Text>
      <Text style={styles.texto}>CP Mobile Applicattion Developer</Text>
      </View>
      <Image
        source={require('./assets/view-table-with-articles-food-family.jpg')}
        style={styles.imagem}
      />
      <Text style={styles.texto}>Digitar o nome do produto</Text>
      <TextInput
        placeholder='Digite o nome do produto'
        style={styles.input}
        keyboardType='default'
        maxLength={40}
        value={nomeProduto}
        onChangeText={(valor)=>setNomeProduto(valor)}
      />
      <Text style={styles.texto}>Digitar a porcentagem do produto</Text>
      <TextInput
        placeholder='Digite o valor do produto'
        style={styles.input}
        keyboardType='number-pad'
        value={valorProduto}
        maxLength={10}
        onChangeText={(valor)=>setValorProduto(valor)}
      />
      <Text style={styles.texto}>Digitar o aumento da porcentagem do produto</Text>
      <TextInput
        placeholder='Digite a porcentagem do aumento'
        style={styles.input}
        keyboardType='numbers-and-punctuation'
        value={porcentagemAumento}
        maxLength={10}
        onChangeText={(valor)=>setPorcentagemAumento(valor)}
      />
       <Button
        title='Clique aqui para enviar'
        onPress={handleEnviar}
      />
      {erro ? <Text style={styles.erroTexto}>{erro}</Text> : null}
      {mostrarDados&&<TratandoOsDados Np={nomeProduto} Vp={valorProduto} PP={porcentagemAumento} Pn={props.valorFinal}/>}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#D9D9D9D9', 
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 50,
      paddingHorizontal: 20,
      gap: 15,
    },
  
    imagem: {
      resizeMode: 'contain',
      height: 150,
      marginBottom: 20,
    },
  
    input: {
      backgroundColor: '#FFFFFF',
      width: '100%',
      maxWidth: 350,
      borderRadius: 8,
      paddingVertical: 12,
      paddingHorizontal: 15,
      borderWidth: 1.5,
      borderColor: '#A9A9A9',
      fontSize: 16,
      color: '#333333',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 2,
    },
  
    titulo: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#333',
    },
  
    botao: {
      marginTop: 10,
      width: '100%',
      maxWidth: 350,
    },
    texto: {
        fontSize: 16,
        color: '#555555',
        marginBottom: 10,
      },erroTexto: {
        color: 'red',
        fontSize: 14,
        marginTop: -10,
        marginBottom: 10,
      },
      
      
  });
  