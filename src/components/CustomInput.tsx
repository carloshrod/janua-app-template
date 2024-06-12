import { View, TextInput, StyleSheet, TextInputProps } from 'react-native';
import { Icon } from 'react-native-paper';

interface InputProps extends TextInputProps {
  label: string;
  icon: string;
}

export const CustomInput = ({ label, icon }: InputProps) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.prepend}>
        <Icon source={icon} size={20} color='#000000' />
      </View>
      <TextInput
        style={styles.textInput}
        placeholder={label}
        placeholderTextColor='#25292E'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
  },
  prepend: {
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: -10 }],
    left: 12,
  },
  textInput: {
    height: 48,
    width: '100%',
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    paddingHorizontal: 40,
    borderWidth: 1,
    borderColor: '#25292E',
    borderRadius: 24,
  },
});
