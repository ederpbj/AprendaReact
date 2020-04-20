import React, {Component, useState, useEffect} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import styles from '../styles';

// import React, { useState, useEffect } from 'react';
// import { Text, View } from 'react-native';

const Blink = (props) => {
  const [isShowingText, setIsShowingText] = useState(true);

   useEffect(() => {
     const toggle = setInterval(() => {
       setIsShowingText(!isShowingText);
     }, 1000);

     return () => clearInterval(toggle);
  })

  if (!isShowingText) {
    return null;
  }

  return <Text>{props.text}</Text>;
}

export function BlinkApp() {
  return (
    <View style={{marginTop: 50}}>
      <Blink text='I love to blink' />
      <Blink text='Yes blinking is so great' />
      <Blink text='Why did they ever take this out of HTML' />
      <Blink text='Look at me look at me look at me' />
    </View>
  );
}
export default class Welcome extends Component {
  constructor(props) {
    super(props);
    const [slogan, setSlogan] = 'Novo slogan';
    this.state = {
      slogan: 'Seu canal de nerds'
    };
  }

  alternar = () => {
    this.setState({
      slogan: this.state.slogan ? '' : 'Seu canal de nerdologias orgias'
      // slogan: 'Seu canal de nerdologias orgias',
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
        <Blink />
      </View>
    );
  }
}
