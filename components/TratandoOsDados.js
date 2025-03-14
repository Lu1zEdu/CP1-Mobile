import { Text, View, StyleSheet } from "react-native";

export default function TratandoOsDados(props) {
  const Np = props.Np;
  const Vp = parseFloat(props.Vp);
  const PP = parseFloat(props.PP);
  
  const preconovo = Vp + (Vp * PP / 100);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Nome do produto: {Np}</Text>
      <Text style={styles.texto}>Valor do produto: R$ {Vp.toFixed(2)}</Text>
      <Text style={styles.texto}>Porcentagem: {PP} %</Text>
      <Text style={styles.texto}>Novo valor: R$ {preconovo.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    width: '100%',
    maxWidth: 350,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  texto: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
});
