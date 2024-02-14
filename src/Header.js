import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faArrowLeft,
  faShoppingCart,
  faCircle,
} from '@fortawesome/free-solid-svg-icons';
import {contextData} from './ContextNew/context';

const Header = ({navigation}) => {
  const {cart} = useContext(contextData);

  return (
    <View style={styles.header}>
      <FontAwesomeIcon
        icon={faArrowLeft}
        size={24}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.cartContainer}>
        <FontAwesomeIcon icon={faShoppingCart} size={24} />
        <FontAwesomeIcon icon={faCircle} size={10} style={styles.badge} />
        <Text style={styles.cartText}>{cart}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#ccc',
    alignItems: 'center',
    width: '100%',
  },
  cartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badge: {
    marginLeft: -12,
    zIndex: 1,
  },

  cartText: {
    fontSize: 16, // Increase font size for better visibility
    fontWeight: 'bold', // Apply bold font weight
    marginLeft: 5, // Add some left margin for spacing
  },
});

export default Header;
