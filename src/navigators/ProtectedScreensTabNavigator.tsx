import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { EventsScreen, HomeScreen } from '../screens';
import { Icon } from 'react-native-paper';

export type ProtectedScreensTabNavigatorProps = {
  Home: undefined;
  Eventos: undefined;
};

const Tab = createBottomTabNavigator<ProtectedScreensTabNavigatorProps>();

export const ProtectedScreensTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={screenOptions}
      backBehavior='history'>
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: HomeTabBarIcon,
        }}
      />
      <Tab.Screen
        name='Eventos'
        component={EventsScreen}
        options={{
          tabBarIcon: HomeTabBarIcon,
        }}
      />
    </Tab.Navigator>
  );
};

const screenOptions = {
  headerShown: false,
  tabBarStyle: {
    paddingVertical: 10,
    backgroundColor: '#000000',
  },
  tabBarInactiveTintColor: '#FFFFFF',
  tabBarActiveTintColor: '#FFCD06',
  tabBarLabelStyle: {
    fontFamily: 'DMSansBold',
    fontSize: 12,
  },
};

const HomeTabBarIcon = ({ color }: { color: string }) => (
  <Icon size={20} color={color} source='home' />
);
