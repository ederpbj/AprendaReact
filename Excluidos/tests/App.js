import React, {Component} from 'react';

import ListaItens from './ListaItens';
import DetalhesItem from './DetalhesItem';
import Categorias from './Categorias';

export default class App extends Component {
  render() {
    return <Cenas />;
  }
}

const Cenas = StackNavigator({
  ListaItens: {
    screen: ListaItens,
    navigationOptions: {
      title: 'Bodokas',
    },
  },

  DetalhesItem: {
    screen: DetalhesItem,
    navigationOptions: {
      title: 'voltar',
    },
  },
});
