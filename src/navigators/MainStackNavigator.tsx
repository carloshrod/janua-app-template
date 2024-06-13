import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, SignupScreen } from '../features';
import { DrawerNavigator } from './';

const Stack = createNativeStackNavigator<MainStackNavigatorProps>();

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Signup' component={SignupScreen} />
      <Stack.Screen name='DrawerNavigator' component={DrawerNavigator} />
    </Stack.Navigator>
  );
};
