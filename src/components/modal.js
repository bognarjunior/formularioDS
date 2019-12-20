import React from 'react';
import { Text, View, Modal, StyleSheet } from 'react-native';
import Button from './button';

const ModalComponent = ({
  visible, label, onPress
}) => (
  <View>
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <View style={styles.container}>
        <View style={styles.feedback}>
          <Text style={styles.text}>{label}</Text>
        </View>
        
        <View style={styles.button}>
          <Button 
            label='Home'
            onPress={onPress}
          />
        </View>
      </View>
    </Modal>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    color: '#FF0000',
    textAlign: 'center',
    fontSize: 28,
  },
  button: {
    flex: 1,
    alignItems: "center"
  }
});


export default ModalComponent;
