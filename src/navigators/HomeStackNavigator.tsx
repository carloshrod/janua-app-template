import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { HomeScreen } from '../features';

export type HomeStackNavigatorProps = {
  Home: undefined;
  'Control de Visitas': undefined;
  Reservaciones: undefined;
  Pagos: undefined;
  Comunicados: undefined;
  Clasificados: undefined;
  Incidentes: undefined;
};

export type HomeNavigationProp =
  NativeStackNavigationProp<HomeStackNavigatorProps>;

const Stack = createNativeStackNavigator<HomeStackNavigatorProps>();

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={HomeScreen} />
    </Stack.Navigator>
  );
};
