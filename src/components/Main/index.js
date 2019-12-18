import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  goto = () => {
    this.props.navigation.navigate('List');
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.goto}>
          <Text>List</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
