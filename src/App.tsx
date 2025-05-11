import React from "react";
import { View ,Text,SafeAreaView,FlatList} from "react-native";
import Products from './data/Products.json';
//ilk olarak FlatList ile verileri alalım
const PatikaStore = () => {
  console.log(Products);
  return (
    <SafeAreaView>
      <FlatList data={Products} 
      renderItem={({ item }) => (
      <Text>{item.title}</Text>
      )}/>

    </SafeAreaView>
  );
};

export default PatikaStore;