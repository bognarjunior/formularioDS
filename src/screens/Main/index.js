import React, { Component } from 'react';
import { View, StyleSheet, Modal, TouchableHighlight, Text, Alert } from 'react-native';
import Input from '../../components/input';
import Button from '../../components/button';

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: 0,
      address: '',
      modalVisible: false,
    };
  }
  
  goto = () => {
    const { name, age, address } = this.state;
    if (name === '' || age === 0 || address === '' ) {
      this.setModalVisible(true);
    } else {
      this.props.navigation.navigate('List', this.state);
    }
  }

  onChangeName = (name) => this.setState({ name });

  onChangeAge = (age) => this.setState({ age });

  onChangeAddress = (address) => this.setState({ address });

  inputs = [
    { label: "Nome", onChangeText: this.onChangeName, keyboardType: "default"}, 
    { label: "Idade", onChangeText: this.onChangeAge, keyboardType: "numeric"}, 
    { label: "Endereço", onChangeText: this.onChangeAddress, keyboardType: "default"}
  ];

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  renderInput = () => {
    return this.inputs.map(item => (
      <Input 
        key={item.label} 
        label={item.label} 
        placeholder={item.label} 
        onChangeText={item.onChangeText} 
        value={item.value} 
        keyboardType={item.keyboardType}
      />
    ))
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Por favor, Preencha todos os dados</Text>

              
              <Button 
                label='Fechar'
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              />
            </View>
          </View>
        </Modal>
        <View style={styles.inputs}>
          {this.renderInput()}
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
  inputs: {
    flex: 2,
    margin: 20,
    padding: 5
  },
  button: {
    flex: 1,
    alignItems: "center"
  }
});
