import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Button from '../../components/button';

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
      <View style={styles.container}>
        <View style={styles.feedback}>
          <Text style={styles.text}>Os dados foram enviados e o cadastro será aprovado em 48 horas.</Text>
        </View>
        
        <View style={styles.button}>
          <Button 
            label='Home'
            onPress={this.goto}
          />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center"
  },
  feedback: {
    flex: 2,
    margin: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: '#3939f7',
    fontSize: 30,
    paddingLeft: 10
  },
  button: {
    flex: 1,
    alignItems: "center"
  }
});
