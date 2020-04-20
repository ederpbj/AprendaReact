// import React, {Component} from 'react';
import React from 'react';

import Welcome from './components/Welcome';

// console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];

export default class index extends React.PureComponent {
  render() {
    return <Welcome titulo="Canal Geek Dev" slogan="Seu canal de nerdologia" />;
  }
}
