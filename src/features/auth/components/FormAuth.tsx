import { View, Text, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ReactNode } from 'react';
import {
  INPUT_LOGIN_FIELDS,
  INPUT_REGISTER_FIELDS,
} from '../../../utils/arrays';
import { CustomButton, CustomInput } from '../../../components';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export const FormAuth = ({ children }: { children?: ReactNode }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackNavigatorProps>>();
  const { name: routeName } = useRoute();
  const isLogin = routeName?.toLowerCase() === 'login';

  const inputFields: InputAuthField[] = isLogin
    ? (INPUT_LOGIN_FIELDS as InputAuthField[])
    : (INPUT_REGISTER_FIELDS as InputAuthField[]);

  const onSubmit = () => {
    try {
      navigation.replace('DrawerNavigator');
    } catch (err) {
      console.error(err);
    }
  };

  const title = isLogin
    ? 'INICIA SESIÓN CON TU CUENTA'
    : 'CREAR UNA NUEVA CUENTA';
  const btnLabel = isLogin ? 'Iniciar Sesión' : 'Registrarse';

  return (
    <View style={styles.form}>
      <Text style={styles.title}>{title}</Text>
      {inputFields.map(({ label, icon }, index) => (
        <View key={`input-${index}`} style={styles.inputContainer}>
          <CustomInput label={label} icon={icon} />
        </View>
      ))}
      <CustomButton label={btnLabel} onPress={onSubmit} />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    width: '100%',
    maxWidth: 400,
    paddingHorizontal: 16,
    paddingVertical: 24,
    gap: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    elevation: 3,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.33,
    shadowRadius: 24,
  },
  title: {
    marginBottom: 16,
    textAlign: 'center',
    fontFamily: 'DMSans-Regular',
    color: '#000000',
  },
  inputContainer: {
    width: '100%',
  },
});
