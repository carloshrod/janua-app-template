import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../features';

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
