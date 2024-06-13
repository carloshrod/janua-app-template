type MainStackNavigatorProps = {
  login: undefined;
  signup: undefined;
  'protected-screens': undefined;
};

type ProtectedScreensTabNavigatorProps = {
  HomeStack: undefined;
  Eventos: undefined;
  QR: undefined;
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
