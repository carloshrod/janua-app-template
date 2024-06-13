import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { ProtectedScreensTabNavigator } from './';
import { LoginScreen, SignupScreen } from '../features';

export type MainStackNavigatorProps = {
  login: undefined;
  signup: undefined;
  'protected-screens': undefined;
};

export type MainNavigationProp =
  NativeStackNavigationProp<MainStackNavigatorProps>;

const Stack = createNativeStackNavigator<MainStackNavigatorProps>();

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='login'
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name='login' component={LoginScreen} />
      <Stack.Screen name='signup' component={SignupScreen} />
      <Stack.Screen
        name='protected-screens'
        component={ProtectedScreensTabNavigator}
      />
    </Stack.Navigator>
  );
};
