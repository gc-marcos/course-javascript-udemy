import React from 'react-native';
import {Text} from 'react-native';
import Estilo from './estilo';

export default props => (
  <Text style={Estilo.txtG}>
    O Valor {props.maior} é maior que o valor {props.menor}!!
  </Text>
);
