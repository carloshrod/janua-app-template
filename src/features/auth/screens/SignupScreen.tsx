import { FC } from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { Icon } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { AuthLayout } from '../../../components';
import { FormAuth } from '../components/FormAuth';

export const SignupScreen: FC<
  NativeStackScreenProps<MainStackNavigatorProps, 'signup'>
> = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackNavigatorProps>>();

  return (
    <AuthLayout>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.goBack}
        onPress={() => navigation.goBack()}>
        <Icon source='arrow-left' size={30} color='#FFFFFF' />
      </TouchableOpacity>
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
