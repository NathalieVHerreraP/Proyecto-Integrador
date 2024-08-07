import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface FormInputProps {
  value: string;
  placeholder: string;
  onChangeText: (value: string) => void;
}

const FormInput: React.FC<FormInputProps> = ({ value, placeholder, onChangeText }) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default FormInput;

