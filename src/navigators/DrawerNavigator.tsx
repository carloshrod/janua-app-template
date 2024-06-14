import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from 'react-native-paper';
import { Text } from 'react-native';
import CustomDrawer from '../components/layout/CustomDrawer';
import { TabNavigator } from './';
import { VehiclesScreen } from '../features';

const Drawer = createDrawerNavigator<DrawerNavigatorProps>();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName='TabNavigator'
      backBehavior='history'
      screenOptions={screenOptions}
      drawerContent={CustomDrawer}>
      <Drawer.Screen
        name='TabNavigator'
        component={TabNavigator}
        options={{ drawerItemStyle: { display: 'none' } }}
      />
      <Drawer.Screen
        name='Asociados'
        options={{
          drawerIcon: AssociatesDrawerIcon,
        }}>
        {() => <Text>Asociados</Text>}
      </Drawer.Screen>
      <Drawer.Screen
        name='Vehiculos'
        component={VehiclesScreen}
        options={{
          title: 'Vehículos',
          drawerIcon: VehiclesDrawerIcon,
        }}
      />
      <Drawer.Screen
        name='Documentos'
        options={{
          drawerIcon: DocumentsDrawerIcon,
        }}>
        {() => <></>}
      </Drawer.Screen>
      <Drawer.Screen
        name='MiPerfil'
        options={{
          title: 'Mi Perfil',
          drawerIcon: MyProfileDrawerIcon,
        }}>
        {() => <Text>Mi Perfil</Text>}
      </Drawer.Screen>
      <Drawer.Screen
        name='Configuracion'
        options={{
          title: 'Configuración',
          drawerIcon: SettingsDrawerIcon,
        }}>
        {() => <Text>Configuración</Text>}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

const screenOptions = {
  headerShown: false,
  drawerStyle: {
    backgroundColor: '#1A1C1F',
    paddingVertical: 20,
  },
  drawerItemStyle: {
    paddingHorizontal: 5,
  },
  drawerLabelStyle: {
    fontFamily: 'DMSans-Bold',
    marginLeft: -16,
  },
  drawerActiveTintColor: '#FFFFFF',
  drawerInactiveTintColor: '#FFFFFF',
  drawerActiveBackgroundColor: 'transparent',
};

const AssociatesDrawerIcon = () => (
  <Icon source='account-group' size={20} color='#FFFFFF' />
);

const VehiclesDrawerIcon = () => (
  <Icon source='car' size={20} color='#FFFFFF' />
);

const DocumentsDrawerIcon = () => (
  <Icon source='file-document' size={20} color='#FFFFFF' />
);

const MyProfileDrawerIcon = () => (
  <Icon source='account' size={20} color='#FFFFFF' />
);

const SettingsDrawerIcon = () => (
  <Icon source='cog' size={20} color='#FFFFFF' />
);
