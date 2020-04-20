import React from 'react';
import {Text, View} from 'react-native';
import styles from '../styles';
//Canal Geek Dev
//Seu Canal de nerdologia

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}> {this.props.titulo} </Text>
      <Text style={styles.slogan}> {this.props.slogan} </Text>
    </View>
  );
};

export default Welcome;