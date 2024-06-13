import { FC } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthLayout } from '../../../components';
import { FormAuth } from '../components/FormAuth';
import { GoBack } from '../../../components/shared/GoBack';

export const SignupScreen: FC<
  NativeStackScreenProps<MainStackNavigatorProps, 'Signup'>
> = () => {
  return (
    <AuthLayout>
      <GoBack />
      <SafeAreaView style={styles.container}>
        <FormAuth />
      </SafeAreaView>
    </AuthLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  goBack: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
});
