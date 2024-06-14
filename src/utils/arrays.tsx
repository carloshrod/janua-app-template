import { Icon } from 'react-native-paper';
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
    navigateTo: 'AccessControlStack',
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
    navigateTo: 'Registro de visitante',
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

export const VISITOR_LOGS_ITEMS = [
  {
    label: 'Eventual',
    logs: [
      {
        title: 'Visita de Luis Perez',
        date: '24/01/2024 18:00 hs',
        description:
          'Lörem ipsum tens eurode kaffeflicka till karade med bysir. Imosk reminat pobelig sedade megalig.',
      },
      {
        title: 'Visita de Valentina Castro',
        date: '24/01/2024 18:00 hs',
        description:
          'Lörem ipsum tens eurode kaffeflicka till karade med bysir. Imosk reminat pobelig sedade megalig.',
      },
    ],
  },
  {
    label: 'Frecuente',
    logs: [
      {
        title: 'Visita de Carlos Hernández',
        date: '24/01/2024 18:00 hs',
        description:
          'Lörem ipsum tens eurode kaffeflicka till karade med bysir. Imosk reminat pobelig sedade megalig.',
      },
    ],
  },
  {
    label: 'Serv.Domicilio/Paqueteria',
    logs: [
      {
        title: 'Visita de Pedro Salgado',
        date: '24/01/2024 18:00 hs',
        description:
          'Lörem ipsum tens eurode kaffeflicka till karade med bysir. Imosk reminat pobelig sedade megalig.',
      },
    ],
  },
];

export const ACTIONS = [
  {
    text: 'Agregar Visita Eventual',
    icon: <Icon source='calendar-check' size={20} color='#FFFFFF' />,
    name: 'eventual',
    position: 1,
    color: '#FFCD06',
  },
  {
    text: 'Agregar Visita Frecuente',
    icon: <Icon source='calendar-sync' size={20} color='#FFFFFF' />,
    name: 'frequent',
    position: 2,
    color: '#FFCD06',
  },
  {
    text: 'Agregar Paquetería',
    icon: <Icon source='package-variant-closed' size={20} color='#FFFFFF' />,
    name: 'package',
    position: 3,
    color: '#FFCD06',
  },
  {
    text: 'Agregar Empleado',
    icon: <Icon source='account-tie' size={20} color='#FFFFFF' />,
    name: 'employee',
    position: 4,
    color: '#FFCD06',
  },
];

export const ACTIONS_MENU = [
  {
    icon: 'square-edit-outline',
    label: 'Editar',
  },
  {
    icon: 'content-copy',
    label: 'Copiar',
  },
  {
    icon: 'trash-can',
    label: 'Borrar',
  },
];

export const DOCUMENTS_ITEMS = [
  {
    title: 'Estados financieros',
    subtitle: 'Finanzas',
    description: 'Balance general y estado de resultados',
    date: 'Noviembre 2023',
  },
  {
    title: 'Estados financieros',
    subtitle: 'Finanzas',
    description: 'Balance general y estado de resultados',
    date: 'Diciembre 2023',
  },
  {
    title: 'Estados financieros',
    subtitle: 'Finanzas',
    description: 'Balance general y estado de resultados',
    date: 'Enero 2024',
  },
];
