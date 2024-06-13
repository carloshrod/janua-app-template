import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AccessControlScreen, HomeScreen } from '../features';

const Stack = createNativeStackNavigator<HomeStackNavigatorProps>();

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Control de Acceso' component={AccessControlScreen} />
    </Stack.Navigator>
  );
};
