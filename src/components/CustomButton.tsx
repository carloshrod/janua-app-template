import { Text, StyleSheet, Pressable, DimensionValue } from 'react-native';

interface ButtonProps {
  label: string;
  width?: DimensionValue;
  onPress: () => null;
}

export const CustomButton = ({
  label,
  width,
  onPress = () => null,
}: ButtonProps) => {
  return (
    <Pressable style={[styles.button, { width }]} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 48,
    marginTop: 8,
    paddingHorizontal: 32,
    backgroundColor: '#000000',
    borderRadius: 24,
  },
  label: {
    fontFamily: 'DMSansMedium',
    fontSize: 16,
    color: '#FFCD06',
    textAlign: 'center',
    lineHeight: 48,
  },
});
