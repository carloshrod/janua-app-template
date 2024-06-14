import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AccessControlScreen, VisitorLogsScreen } from '../features';

const Stack = createNativeStackNavigator<AccessControlNavigatorProps>();

export const AccessControlStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Control de Acceso'
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Control de Acceso' component={AccessControlScreen} />
      <Stack.Screen
        name='Registro de visitante'
        component={VisitorLogsScreen}
      />
    </Stack.Navigator>
  );
};
