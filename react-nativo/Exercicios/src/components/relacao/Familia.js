import React from 'react';
import {Text} from 'react-native';
import Estilo from '../estilo';

export default props => {
  return (
    <>
      <Text style={Estilo.txtG}>Inicio:</Text>
      {props.children}
      <Text style={Estilo.txtG}>Fim.</Text>
    </>
  );
};
