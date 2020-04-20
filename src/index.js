import React, {Component} from 'react';


import Welcome from './components/Welcome';

//console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];

export default class index extends Component {
  render() {
    return (
      <Welcome 
        titulo="Canal Geek Dev"
        slogan="Seu canal de nerdologia"
      />
    );
  }
}
