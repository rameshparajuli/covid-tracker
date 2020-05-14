import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

import styles from './custom-button.styles';
const DefaultButton = ({title, textColor, style, children, ...props}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} {...props}>
      {children}
      <Text style={[styles.text, {color: textColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export const SelectButton = ({children}) => {
  return <View style={styles.selectButton}>{children}</View>;
};

export default DefaultButton;
