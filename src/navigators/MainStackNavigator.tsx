import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProtectedScreensTabNavigator } from './';
import { LoginScreen, SignupScreen } from '../features';

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
