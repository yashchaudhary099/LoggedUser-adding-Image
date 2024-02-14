import {createContext, useState} from 'react';

export const contextData = createContext();

export const CreateProvider = props => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState(0);

  return (
    <contextData.Provider value={{user, setUser, cart, setCart}}>
      {props.children}
    </contextData.Provider>
  );
};
