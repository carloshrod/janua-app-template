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
    label: 'Control de Visitas',
    icon: VisitControlIcon,
    navigateTo: 'Control de Acceso',
  },
  { label: 'Reservaciones', icon: AppointmentIcon, navigateTo: 'Home' },
  { label: 'Pagos', icon: PaymentIcon, navigateTo: 'Home' },
  { label: 'Comunicados', icon: SpeakerIcon, navigateTo: 'Home' },
  { label: 'Clasificados', icon: DocumentIcon, navigateTo: 'Home' },
  { label: 'Incidentes', icon: AlertIcon, navigateTo: 'Home' },
];
