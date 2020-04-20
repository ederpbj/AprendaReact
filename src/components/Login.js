/* eslint-disable react/prefer-stateless-function */
import React, {Component} from 'react';
import {
  Alert,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import styles from '../styles/Login';

export default class index extends Component {
  clicou = () => {
    Alert.alert('CanalGeekDev', 'Você clicou no botão!');
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          // eslint-disable-next-line global-require
          source={require('../../assets/images/geekdev.jpg')}
          style={styles.logo}
        />

        <TextInput placeholder="Digite seu e-mail" style={styles.input} />

        <TextInput
          placeholder="Digite sua senha"
          style={styles.input}
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.botao}
          // onPress={() => {this.clicou()}}
          onPress={() => {this.props.navigation.navigate('Home')}}
        >
          <Text style={styles.botaoText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
