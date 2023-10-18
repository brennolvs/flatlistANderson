import React, { useState } from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity, Alert, StyleSheet } from 'react-native';

const produtos = [
  {
    id: 1,
    nome: 'Hambúrguer',
    descricao: 'Pão, bife de hambúrguer 90g, salada e batata.',
    preco: 8.5,
    categoria_id: 1,
  },
  {
    id: 2,
    nome: 'X-Búrguer',
    descricao: 'Pão, bife de hambúrguer 90g, 1 fatia de queijo, salada e batata.',
    preco: 10.5,
    categoria_id: 1,
  },
  {
    id: 3,
    nome: 'X-Bacon',
    descricao: 'Pão, bife de hambúrguer 90g, 1 fatia de queijo, 2 fatias de bacon, salada e batata.',
    preco: 12.5,
    categoria_id: 1,
  },
  {
    id: 4,
    nome: 'X-Tudo',
    descricao: 'Pão, 2 bifes de hambúrguer 90g, 2 fatias de queijo, 4 fatias de bacon, salada e batata.',
    preco: 14.5,
    categoria_id: 1,
  },
  {
    id: 5,
    nome: 'Coca cola 350ml',
    descricao: 'Coca-Cola 350ml é o refrigerante mais tradicional e consumido no mundo inteiro',
    preco: 5.5,
    categoria_id: 2,
  },
  {
    id: 6,
    nome: 'Coca cola 600ml',
    descricao: 'Coca-Cola Original 600ml é o refrigerante mais tradicional e consumido no mundo inteiro',
    preco: 7.5,
    categoria_id: 2,
  },
];

const App = () => {
  const [products, setProducts] = useState(produtos);

  const handleProductPress = (descricao, nome) => {
    Alert.alert(nome, descricao);
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.productItem}
        onPress={() => handleProductPress(item.descricao, item.nome)}>
        <View>
          <Text style={styles.label}>{item.nome}</Text>
          <Text>Preço: R$ {item.preco.toFixed(2)}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
    marginTop: 50,
  },
  productItem: {
    backgroundColor: '#A9A9A9',
    marginBottom: 20,
    padding: 16,
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  descricao: {
    fontSize: 14,
    color: 'black',
    marginTop: 8,
  },
});