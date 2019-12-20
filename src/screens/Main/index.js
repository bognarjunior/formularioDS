import React, { Component } from 'react';
import { View, StyleSheet,} from 'react-native';
import Input from '../../components/input';
import Button from '../../components/button';
import ModalComponent from '../../components/modal';

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: 0,
      address: '',
      modalVisible: false,
    };
    console.log(this.state.modalVisible)
  }
  
  goto = () => {
    const { name, age, address } = this.state;
    if (name === '' || age === 0 || address === '' ) {
      this.setModalVisible();
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

  setModalVisible = () => {
    const visible = !this.state.modalVisible
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
    console.log(this.state.modalVisible)
    return (
      <View style={styles.container}>
        <ModalComponent visible={this.state.modalVisible} onPress={this.setModalVisible} label="Por favor, Preencha todos os dados!"/>
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
