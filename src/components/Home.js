import React, {Component} from 'react';
import {View, Text} from 'react-native';

import styles from '../styles/Home';

export default class Home extends Component {
  render() {
    const {navigation} = this.props;
    const nomeUsuario = navigation.getParam('nome');

    return (
      <View style={styles.container}>
        <Image style={styles.logo} souce={require('../../assets/images/profile.jpg')} />
        <Text style={styles.texto1}>Olá {nomeUsuario} !!</Text>
        <Text style={styles.texto2}>
          Bem vindo a tela Home, esse é seu Profile
        </Text>
      </View>
    );
  }
}
