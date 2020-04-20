import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}> Canal Geek Dev </Text>
      <Text style={styles.slogan}> Seu Canal de nerdologia </Text>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
