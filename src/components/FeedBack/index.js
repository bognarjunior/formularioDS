import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class FeedBackScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  goto = () => {
    this.props.navigation.navigate('Main');
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.goto}>
          <Text>HOME</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
