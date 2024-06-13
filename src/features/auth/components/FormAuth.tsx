import { View, Text, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { ReactNode } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  INPUT_LOGIN_FIELDS,
  INPUT_REGISTER_FIELDS,
} from '../../../utils/arrays';
import { CustomButton, CustomInput } from '../../../components';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const createSchema = (fields: InputAuthField[]) => {
  const schemaObj: Record<string, any> = {};

  fields.forEach(field => {
    schemaObj[field.name] = z
      .string()
      .min(1, { message: `${field.label} es requerido!` });
  });

  return z.object(schemaObj);
};

export const FormAuth = ({ children }: { children?: ReactNode }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackNavigatorProps>>();
  const { name: routeName } = useRoute();
  const isLogin = routeName?.toLowerCase() === 'login';

  const inputFields: InputAuthField[] = isLogin
    ? (INPUT_LOGIN_FIELDS as InputAuthField[])
    : (INPUT_REGISTER_FIELDS as InputAuthField[]);
  const schema = createSchema(inputFields);
  type FormFields = z.infer<typeof schema>;

  const {
    control,
    formState: { isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
    defaultValues: inputFields.reduce(
      (acc, { name }) => ({ ...acc, [name]: '' }),
      {},
    ),
  });

  const onSubmit: SubmitHandler<FormFields> = async () => {
    try {
      console.log('Iniciando sesión!');
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

      {inputFields.map(({ name, label, icon }, index) => (
        <View key={`input-${index}`} style={styles.inputContainer}>
          <Controller
            control={control}
            name={name as keyof FormFields}
            render={({ field: { onChange, onBlur, value } }) => {
              return (
                <CustomInput
                  label={label}
                  icon={icon}
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
              );
            }}
          />
        </View>
      ))}

      <CustomButton
        label={btnLabel}
        isSubmitting={isSubmitting}
        onPress={onSubmit}
      />

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
    textAlign: 'center',
    fontFamily: 'DMSans-Regular',
    marginBottom: 16,
  },
  inputContainer: {
    width: '100%',
  },
});
