import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  ImageProps,
} from 'react-native';
import { Icon } from 'react-native-paper';

export interface NavLinkProps {
  label: string;
  icon: ImageProps;
  onNavigation: () => void;
}

export const NavLink = ({ label, icon, onNavigation }: NavLinkProps) => {
  return (
    <Pressable style={styles.navLink} onPress={onNavigation}>
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
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#25292E',
  },
});
