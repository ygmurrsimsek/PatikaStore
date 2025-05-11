import React from 'react';
import { Text,View,Image } from 'react-native';
import styles from './Product.style';
const Product = ({item}) => {
    return (
        <View>
            <Text>{item.title}</Text>
            <Image source={{uri:item.imgURL}} style={styles.image}/>
            <Text>{item.price}</Text>
            <Text>{item.inStock ? "In Stock" : "Out of Stock"}</Text>
        </View>
    );
};

export default Product;