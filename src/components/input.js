import React from 'react';
import { View, TextInput, Text, StyleSheet  } from 'react-native';

const Input = ({
  label, value, onChangeText, placeholder, keyboardType
}) => (
  <View style={style.container}>
    <Text style={style.label}>{label}</Text>
    <TextInput style={style.input}
      placeholder={placeholder}
      autoCorrect={false}
      value={value}
      keyboardType={keyboardType}
      onChangeText={onChangeText}
    />
  </View>
);

const style = StyleSheet.create({
  container: {
    height: 40,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginRight:20
  },
  label: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 10
  },
  input: {
    color: '#000',
    paddingHorizontal: 10,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
    borderBottomWidth: 1
  }
});

export default Input;
