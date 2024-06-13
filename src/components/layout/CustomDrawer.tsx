import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  DrawerContentComponentProps,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Icon } from 'react-native-paper';
import { Avatar, NavbarLogo } from '../../assets/images';

const CustomDrawer = (props: DrawerContentComponentProps) => {
  const handleLogout = () => props.navigation.navigate('Login');

  return (
    <SafeAreaView>
      <View>
        <Pressable onPress={() => props.navigation.navigate('Home')}>
          <Image style={styles.logo} source={NavbarLogo} />
        </Pressable>
        <View style={styles.userInfo}>
          <Image source={Avatar} />
          <Text style={styles.userName}>Leonardo Herrera</Text>
        </View>
      </View>
      <DrawerItemList {...props} />
      <Pressable style={styles.logout} onPress={handleLogout}>
        <Icon source='logout' size={20} color='#FFFFFF' />
        <Text style={styles.logoutLabel}>Cerrar sesión</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    marginLeft: 24,
    marginBottom: 40,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  userName: {
    width: '70%',
    fontFamily: 'DMSans-Bold',
    fontSize: 14,
    color: '#FFFFFF',
  },
  logout: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginLeft: 24,
    paddingVertical: 16,
  },
  logoutLabel: {
    fontFamily: 'DMSans-Bold',
    color: '#FFFFFF',
  },
});

export default CustomDrawer;
