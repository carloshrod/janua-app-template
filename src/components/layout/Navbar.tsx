import { useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable, Alert } from 'react-native';
import {
  DrawerActions,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { Icon } from 'react-native-paper';
import { GoBack } from '../shared/GoBack';
import { NavbarLogo } from '../../assets/images';

const Navbar = () => {
  const navigation = useNavigation();
  const { name } = useRoute();
  const [checked, setChecked] = useState(false);

  const HIDDEN_NAVBAR = ['eventos', 'qr'];
  const isDrawer = name?.toLowerCase() === 'home';
  const isHiddenNavbar = HIDDEN_NAVBAR.includes(name.toLowerCase());
  const isBgLight = name?.toLowerCase() === 'vehiculos';
  const notificationsLength = 1;

  return isDrawer || !isHiddenNavbar ? (
    <View style={[styles.navBar, isBgLight ? styles.bgLight : styles.bgDark]}>
      {isDrawer ? (
        <>
          <Pressable
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
            <Icon source='menu' size={26} color='#FFFFFF' />
          </Pressable>
          <Image source={NavbarLogo} />
          <Pressable
            style={styles.notification}
            onPress={() => {
              Alert.alert('Revisando notificaciones!');
              setChecked(true);
            }}>
            <Icon source='bell' size={24} color='#FFFFFF' />
            {notificationsLength > 0 && !checked ? (
              <View style={styles.notificationDot}>
                <Text style={styles.notificationNumber}>
                  {notificationsLength}
                </Text>
              </View>
            ) : null}
          </Pressable>
        </>
      ) : (
        <>
          <GoBack top={16} left={20} />
          <Text
            style={[
              styles.routeName,
              isBgLight ? styles.textDark : styles.textLight,
            ]}>
            {name}
          </Text>
        </>
      )}
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  navBar: {
    width: '100%',
    height: 56,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  bgLight: {
    backgroundColor: '#FFFFFF',
  },
  bgDark: {
    backgroundColor: '#25292E',
  },
  notification: {
    position: 'relative',
  },
  notificationDot: {
    position: 'absolute',
    right: -7,
    bottom: -4,
    height: 18,
    width: 18,
    backgroundColor: 'red',
    borderRadius: 50,
  },
  notificationNumber: {
    textAlign: 'center',
    fontFamily: 'DMSans-Bold',
    fontSize: 12,
    lineHeight: 18,
    color: '#FFFFFF',
    borderRadius: 50,
  },
  routeName: {
    margin: 'auto',
    fontFamily: 'DMSans-Bold',
    fontSize: 18,
  },
  textLight: {
    color: '#FFFFFF',
  },
  textDark: {
    color: '#000000',
  },
});

export default Navbar;
