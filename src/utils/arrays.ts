import { InputField } from '../components/FormAuth';

export const INPUT_LOGIN_FIELDS: InputField[] = [
  { name: 'email', label: 'Ingresa tu email', icon: 'email' },
  { name: 'password', label: 'Contraseña', icon: 'key' },
];

export const INPUT_REGISTER_FIELDS: InputField[] = [
  { name: 'username', label: 'Ingresa tu nombre', icon: 'account' },
  { name: 'email', label: 'Ingresa tu email', icon: 'email' },
  { name: 'password', label: 'Contraseña', icon: 'key' },
  { name: 'repeatPassword', label: 'Confirmar contraseña', icon: 'key' },
];
