import { StyleSheet, DimensionValue } from 'react-native';
import { Button } from 'react-native-paper';

interface ButtonProps {
  label: string;
  width?: DimensionValue;
  isSubmitting?: boolean;
  onPress: any;
}

export const CustomButton = ({
  label,
  width = undefined,
  isSubmitting,
  onPress = () => null,
}: ButtonProps) => {
  return (
    <Button
      mode='contained'
      buttonColor='#000000'
      textColor='#FFCD06'
      style={[styles.button, { width: width ?? '100%' }]}
      contentStyle={styles.buttonContent}
      labelStyle={styles.buttonLabel}
      disabled={isSubmitting}
      loading={isSubmitting}
      onPress={onPress}>
      {label}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 8,
    borderRadius: 24,
  },
  buttonContent: {
    height: 48,
  },
  buttonLabel: {
    fontFamily: 'DMSans-Medium',
    fontSize: 16,
  },
});
