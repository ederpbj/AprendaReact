import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

import styles from './styles';

console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];

export default class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}> Canal Geek Dev </Text>
        <Text style={styles.slogan}> Seu Canal de nerdologia </Text>
      </View>
    );
  }
}
