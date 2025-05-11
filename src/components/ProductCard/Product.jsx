import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './Product.style';

const Product = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.imgURL }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>{item.price}</Text>
      <Text style={[styles.stock, { color: item.inStock ? 'green' : 'red' }]}>
        {item.inStock ? 'In Stock' : 'Out of Stock'}
      </Text>
    </View>
  );
};

export default Product;
