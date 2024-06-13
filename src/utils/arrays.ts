import {
  AlertIcon,
  AppointmentIcon,
  DocumentIcon,
  PaymentIcon,
  SpeakerIcon,
  VisitControlIcon,
} from '../assets/icons';

export const INPUT_LOGIN_FIELDS = [
  { name: 'email', label: 'Ingresa tu email', icon: 'email' },
  { name: 'password', label: 'Contraseña', icon: 'key' },
];

export const INPUT_REGISTER_FIELDS = [
  { name: 'username', label: 'Ingresa tu nombre', icon: 'account' },
  { name: 'email', label: 'Ingresa tu email', icon: 'email' },
  { name: 'password', label: 'Contraseña', icon: 'key' },
  { name: 'repeatPassword', label: 'Confirmar contraseña', icon: 'key' },
];

export const NAVLINK_LABELS = [
  {
    label: 'Control de Acceso',
    icon: VisitControlIcon,
    navigateTo: 'Control de Acceso',
  },
  { label: 'Reservaciones', icon: AppointmentIcon, navigateTo: 'Home' },
  { label: 'Pagos', icon: PaymentIcon, navigateTo: 'Home' },
  { label: 'Comunicados', icon: SpeakerIcon, navigateTo: 'Home' },
  { label: 'Clasificados', icon: DocumentIcon, navigateTo: 'Home' },
  { label: 'Incidentes', icon: AlertIcon, navigateTo: 'Home' },
];

export const ACCESS_CONTROL_ITEMS = [
  {
    label: 'Registro de visitante',
    icon: 'account-check',
    navigateTo: 'Control de Acceso',
  },
  {
    label: 'Empleados domésticos',
    icon: 'account-tie',
    navigateTo: 'Control de Acceso',
  },
  {
    label: 'Bitácoras de entradas',
    icon: 'file-document',
    navigateTo: 'Control de Acceso',
  },
  {
    label: 'Tarjetas de acceso',
    icon: 'badge-account-horizontal',
    navigateTo: 'Control de Acceso',
  },
];
