import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { HomeScreen, LoginScreen, SignupScreen } from '../screens';

export type MainStackNavigatorProps = {
  login: undefined;
  signup: undefined;
  'protected-screens': undefined;
};

export type MainNavigationProp = NativeStackNavigationProp<
  MainStackNavigatorProps,
  'login' | 'signup' | 'protected-screens'
>;

const Stack = createNativeStackNavigator<MainStackNavigatorProps>();

export function MainStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='login' component={LoginScreen} />
      <Stack.Screen name='signup' component={SignupScreen} />
      <Stack.Screen name='protected-screens' component={HomeScreen} />
    </Stack.Navigator>
  );
}
