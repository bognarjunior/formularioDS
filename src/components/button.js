import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import PropTypes from 'prop-types';

export default function Button({
  onPress,
  label = 'Próximo',
  buttonStyle = styles.button,
  textColor = styles.text,
}) {
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textColor}>{label.toUpperCase()}</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  label: PropTypes.string,
  buttonStyle: PropTypes.any,
  textColor: PropTypes.any,
};

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 60,
    backgroundColor: '#3939f7',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});