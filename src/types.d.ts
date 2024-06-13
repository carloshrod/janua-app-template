type MainStackNavigatorProps = {
  Login: undefined;
  Signup: undefined;
  DrawerNavigator: undefined;
};

type TabNavigatorProps = {
  HomeStack: undefined;
  Eventos: undefined;
  QR: undefined;
};

type DrawerNavigatorProps = {
  TabNavigator: undefined;
  Asociados: undefined;
  Vehiculos: undefined;
  Documentos: undefined;
  MiPerfil: undefined;
  Configuracion: undefined;
};

type HomeStackNavigatorProps = {
  Home: undefined;
  'Control de Visitas': undefined;
  Reservaciones: undefined;
  Pagos: undefined;
  Comunicados: undefined;
  Clasificados: undefined;
  Incidentes: undefined;
};

interface InputAuthField {
  name: 'email' | 'username' | 'password' | 'repeatPassword';
  label: string;
  icon: string;
}
