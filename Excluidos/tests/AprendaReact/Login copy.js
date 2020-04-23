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

import styles from '../../../src/styles/Login';

export default class index extends Component {
  
  clicou = () => {
    Alert.alert('CanalGeekDev', 'Você clicou no botão!');
    // const [value, onChangeText] = React.useState('Useless Placeholder');
  };

  // Teste
  onLearnMore = (item) => {
    this.props.navigation.navigate('DetalhesItem', item);
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/geekdev.jpg')}
          style={styles.logo}
        />

        <TextInput
          placeholder="Digite seu e-mail"
          style={styles.input}
          onChangeText={text => this.state.nome = text}
        />

        <TextInput
          placeholder="Digite sua senha"
          style={styles.input}
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.botao}
          // onPress={() => {this.clicou()}}
          onPress={() => {this.clicou()}}
          /* onPress={() => {
            navigate('Home', {nome: [this.state.nome]})
          }}> */
          
          /* onPress={() => {
            this.props.navigation.navigate('Home', {'nome': this.state.nome})
          }}> */
          <Text style={styles.botaoText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
