import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { EventsScreen, QRScreen } from '../screens';
import { Icon } from 'react-native-paper';
import { Image } from 'react-native';
import { CalendarIcon } from '../assets/icons';
import { HomeStackNavigator } from './HomeStackNavigator';

export type ProtectedScreensTabNavigatorProps = {
  HomeStack: undefined;
  Eventos: undefined;
  QR: undefined;
};

const Tab = createBottomTabNavigator<ProtectedScreensTabNavigatorProps>();

export const ProtectedScreensTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName='HomeStack'
      screenOptions={screenOptions}
      backBehavior='history'>
      <Tab.Screen
        name='HomeStack'
        component={HomeStackNavigator}
        options={{
          title: 'Home',
          tabBarIcon: HomeTabBarIcon,
        }}
      />
      <Tab.Screen
        name='Eventos'
        component={EventsScreen}
        options={{
          tabBarIcon: EventsTabBarIcon,
        }}
      />
      <Tab.Screen
        name='QR'
        component={QRScreen}
        options={{
          tabBarIcon: QRTabBarIcon,
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
  <Icon source='home' size={20} color={color} />
);

const EventsTabBarIcon = ({ color }: { color: string }) => (
  <Image source={CalendarIcon} style={{ tintColor: color }} />
);

const QRTabBarIcon = ({ color }: { color: string }) => (
  <Icon source='qrcode' size={20} color={color} />
);
