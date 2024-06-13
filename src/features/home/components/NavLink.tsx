import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import { Icon } from 'react-native-paper';
import { NavLinkProps } from '../screens/HomeScreen';

export const NavLink = ({ label, icon, navigateTo }: NavLinkProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackNavigatorProps>>();

  return (
    <Pressable
      style={styles.navLink}
      onPress={() => navigation.navigate(navigateTo)}>
      <View style={styles.navLinkLabel}>
        <Image source={icon} />
        <Text style={styles.labelText}>{label}</Text>
      </View>
      <Icon source='chevron-right' size={24} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  navLink: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
  },
  navLinkLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
  },
  labelText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#25292E',
  },
});
