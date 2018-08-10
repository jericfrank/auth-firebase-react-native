import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const Card = ({ children }) => {
  const { containerStyle } = styles;
  return (
    <View style={containerStyle}>
      {children}
    </View>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    elevation: 2,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export { Card };
