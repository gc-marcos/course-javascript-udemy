import React from 'react';
import Filho from './Filho';

export default props => {
  let x = 130;
  let y = 1000;
  return (
    <>
      <Filho a={x} b={y} />
      <Filho a={x + 100} b={y + 200} />
    </>
  );
};
