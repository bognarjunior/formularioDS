import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  goto = () => {
    this.props.navigation.navigate('FeedBack');
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.goto}>
          <Text>FeedBack</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
