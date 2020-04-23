import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class DetalhesItem extends Component {

constructor(props){
    super(props);
}

render(){

    const params = this.props.navigation.state.params;


    return(
        <View>
            <Text>{ params.name }</Text>
            <Text>{ params.description }</Text>
            <Text>{ params.contact.email }</Text>
        </View>
    );
}