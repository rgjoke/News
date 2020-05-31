import React from 'react';
import { useContext } from 'react';

const Context = React.createContext();

export default Context;

export const useMyContext = () => useContext(Context);