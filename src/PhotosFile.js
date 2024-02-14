import React, {useState, useContext} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {contextData} from './ContextNew/context';
import {Data} from './Data';
import Header from './Header';

const PhotoData = () => {
  const [photos] = useState(Data);
  const {cart, setCart} = useContext(contextData);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = item => {
    const existingItemIndex = cartItems.findIndex(
      cartItem => cartItem.id === item.id,
    );
    if (existingItemIndex !== -1) {
      // If item already exists in cart, increase its quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity++;
      setCartItems(updatedCartItems);
    } else {
      // If item does not exist in cart, add it with quantity 1
      setCartItems([...cartItems, {...item, quantity: 1}]);
    }
    // Increase total cart count
    setCart(cart + 1);
  };

  const removeFromCart = item => {
    const existingItemIndex = cartItems.findIndex(
      cartItem => cartItem.id === item.id,
    );
    if (existingItemIndex !== -1) {
      // If item exists in cart
      if (cartItems[existingItemIndex].quantity > 1) {
        // If item quantity is more than 1, decrease its quantity
        const updatedCartItems = [...cartItems];
        updatedCartItems[existingItemIndex].quantity--;
        setCartItems(updatedCartItems);
      } else {
        // If item quantity is 1, remove it from cart
        const updatedCartItems = cartItems.filter(
          cartItem => cartItem.id !== item.id,
        );
        setCartItems(updatedCartItems);
      }
      // Decrease total cart count
      setCart(cart - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Header cartItems={cartItems} />
      <ScrollView horizontal={true}>
        {photos.map((item, index) => (
          <View key={index} style={styles.horizontalImageContainer}>
            <Image source={{uri: item.download_url}} style={styles.image} />
            <Text>{item.author}</Text>
          </View>
        ))}
      </ScrollView>
      <ScrollView>
        {photos.map((item, index) => (
          <View key={index}>
            <Text>{item.author}</Text>
            <Image
              source={{uri: item.download_url}}
              style={styles.verticalImage}
            />
            <TouchableOpacity onPress={() => addToCart(item)}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Add to Cart</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => removeFromCart(item)}>
              <View style={[styles.button, styles.removeButton]}>
                <Text style={styles.buttonText}>Remove from Cart</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontalImageContainer: {
    alignItems: 'center',
    marginRight: 20,
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
  },
  verticalImage: {
    width: 200,
    height: 200,
    marginVertical: 10,
  },
  button: {
    backgroundColor: 'rgb(106, 90, 205)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
  },
  removeButton: {
    backgroundColor: 'red',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
});

export default PhotoData;
