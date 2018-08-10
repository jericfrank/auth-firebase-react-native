import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const Header = ({ label }) => {
  const { viewStyle, textStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{label}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    elevation: 4
  },
  textStyle: {
    fontSize: 20
  }
};

Header.propTypes = {
  label: PropTypes.string.isRequired
};

export { Header };
