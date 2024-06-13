import { FC } from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthLayout } from '../../../components';
import { FormAuth } from '../components/FormAuth';

export const LoginScreen: FC<
  NativeStackScreenProps<MainStackNavigatorProps, 'login'>
> = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackNavigatorProps>>();

  return (
    <AuthLayout>
      <SafeAreaView style={styles.container}>
        <FormAuth>
          <View style={styles.linksContainer}>
            <Text style={styles.link}>Olvidaste tu contraseña?</Text>
            <View style={styles.separator} />
            <View style={styles.newAccount}>
              <Text style={styles.link}>Crear una nueva cuenta?</Text>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate('signup')}>
                <Text style={styles.link}>Click aquí</Text>
              </TouchableOpacity>
            </View>
          </View>
        </FormAuth>
      </SafeAreaView>
    </AuthLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  linksContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 40,
  },
  link: {
    fontFamily: 'DMSans-Regular',
    fontSize: 12,
    color: '#25292E',
  },
  separator: {
    width: 33,
    borderBottomColor: '#25292E',
    borderBottomWidth: 2,
    marginTop: 10,
  },
  newAccount: {
    flexDirection: 'row',
    gap: 4,
  },
});
