import React, {useContext} from 'react';
import {View, Text} from 'react-native';

import {contextData} from '../ContextNew/context';

const Home = () => {
  const user = useContext(contextData);

  console.log(user?.user, 'data is print');
  return (
    <View>
      <Text>Welcome to the Home Page!</Text>
    </View>
  );
};

export default Home;
