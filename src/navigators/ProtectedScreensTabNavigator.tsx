import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { EventsScreen, HomeScreen, QRScreen } from '../screens';
import { Icon } from 'react-native-paper';
import { Image } from 'react-native';
import { CalendarIcon } from '../assets/icons';

export type ProtectedScreensTabNavigatorProps = {
  Home: undefined;
  Eventos: undefined;
  QR: undefined;
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
