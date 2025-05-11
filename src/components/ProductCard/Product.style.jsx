import { Dimensions, StyleSheet } from 'react-native';

const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 8,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    width: deviceWidth / 2 - 24,  // 2 kolondan biri olacak, kenar boşluklarını ayarladık
    height: 250,                 // sabit yükseklik
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center',
  },
  price: {
    fontSize: 13,
    color: 'gray',
    marginBottom: 4,
  },
  stock: {
    fontSize: 12,
    color: 'green',
  },
});
