import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import styles from '../styles';

export default class Welcome extends Component {
  state = {
    slogan: 'Seu canal de nerds',
  };

  alternar = () => {
    this.setState({
      slogan: this.state.slogan ? '' : 'Seu canal de nerdologias orgias',
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.botao} onPress={this.alternar}>
          <Text style={styles.texto}>Mudar State</Text>
        </TouchableOpacity>
        <Text style={styles.texto}> {this.props.titulo} </Text>
        <Text style={styles.slogan}> {this.props.slogan} </Text>
      </View>
    );
  }
}
