import React from "react";
import { View ,Text,SafeAreaView,FlatList,StyleSheet,TextInput} from "react-native";
import Products from './data/Products.json';//veriler buradan geliyor
import Product from "./components/ProductCard/Product";
//ilk olarak FlatList ile verileri alalım
const PatikaStore = () => {
  const [text, setText] = React.useState("");
  console.log(Products);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.mainText}>PATİKASTORE</Text>
        <TextInput style={styles.input} value={text} onChangeText={setText} placeholder="Ara..."/>
      </View>
      <FlatList data={Products} keyExtractor={(item) => item.id.toString()} horizontal={false} numColumns={2} 
      renderItem={({ item }) => (
      <Product item={item}/>
      
      )}/>
      

    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container:{
    padding: 10,
    
  },
  mainText:{
    fontSize: 25,
    fontWeight:"bold",
    color:"#800080",
    marginBottom: 10,
  },
  input:{
    
    borderColor: "gray",
    borderWidth:1,
    padding: 13,
    borderRadius: 5,
    backgroundColor: "#f0f0f0",

  }
});

export default PatikaStore;