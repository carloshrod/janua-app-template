type MainStackNavigatorProps = {
  Login: undefined;
  Signup: undefined;
  DrawerNavigator: undefined;
};

type DrawerNavigatorProps = {
  TabNavigator: undefined;
  Asociados: undefined;
  Vehiculos: undefined;
  Documentos: undefined;
  MiPerfil: undefined;
  Configuracion: undefined;
};

type TabNavigatorProps = {
  HomeStack: undefined;
  Eventos: undefined;
  QR: undefined;
};

type HomeStackNavigatorProps = {
  Home: undefined;
  AccessControlStack: undefined;
  Reservaciones: undefined;
  Pagos: undefined;
  Comunicados: undefined;
  Clasificados: undefined;
  Incidentes: undefined;
};

type AccessControlNavigatorProps = {
  'Control de Acceso': undefined;
  'Registro de visitante': undefined;
  'Empleados domésticos': undefined;
  'Bitácores de entradas': undefined;
  'Tarjetas de acceso': undefined;
};

interface InputAuthField {
  name: 'email' | 'username' | 'password' | 'repeatPassword';
  label: string;
  icon: string;
}
