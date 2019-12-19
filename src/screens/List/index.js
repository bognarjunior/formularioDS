import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Button from '../../components/button';

import { saveConfiguration } from '../../services/storage';

export default class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.navigation.getParam('name', ''),
      age: props.navigation.getParam('age', ''),
      address: props.navigation.getParam('address', '')
    };
  }

  goto = () => {
    saveConfiguration('@formularioDS', JSON.stringify(this.state));
    this.props.navigation.navigate('FeedBack');
  }

  render() {
    const { name, age, address } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.list}>
          <Text style={styles.text}>
            Nome: {name}
          </Text>
          <Text style={styles.text}>
            Idade: {age}
          </Text>
          <Text style={styles.text}>
            Endereço: {address}
          </Text>
        </View>
        
        <View style={styles.button}>
          <Button 
            label='Próximo'
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
  list: {
    flex: 2,
    margin: 20,
    padding: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 22,
    marginBottom:20
  },
  button: {
    flex: 1,
    alignItems: "center"
  }
});
