/* eslint-disable react/prefer-stateless-function */
import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';

export default class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={require('../../assets')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
