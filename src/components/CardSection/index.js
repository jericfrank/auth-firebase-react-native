import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const CardSection = ({ children }) => {
  const { containerStyle } = styles;
  return (
    <View style={containerStyle}>
      {children}
    </View>
  );
};

CardSection.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = {
  containerStyle: {
    borderColor: '#ddd',
    borderBottomWidth: 1,
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row'
  }
};

export { CardSection };
