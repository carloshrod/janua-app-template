import { View, Text, Pressable, StyleSheet, Alert } from 'react-native';
import { ACTIONS_MENU } from '../../../utils/arrays';
import { Icon } from 'react-native-paper';

interface ActionMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const ActionMenu = ({ isOpen, onToggle }: ActionMenuProps) => {
  return (
    <View
      style={[
        styles.actionMenu,
        isOpen ? styles.bgOpaque : styles.bgTransparent,
      ]}>
      <Pressable style={styles.dotsContainer} onPress={onToggle}>
        <Icon source='dots-vertical' size={16} color='#FFFFFF' />
      </Pressable>
      <View style={[styles.menuItems, !isOpen && styles.hidden]}>
        {ACTIONS_MENU.map(({ icon, label }, index) => (
          <View key={`${label}-${index}`} style={styles.buttonContainer}>
            <Pressable
              style={styles.button}
              onPress={() => Alert.alert(`Acción de ${label}`)}>
              <Icon source={icon} size={20} color='#FFFFFF' />
            </Pressable>
            <View style={styles.buttonLabel}>
              <Text>{label}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  actionMenu: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  bgOpaque: {
    backgroundColor: '#272620b0',
  },
  bgTransparent: {
    backgroundColor: 'transparent',
  },
  dotsContainer: {
    padding: 20,
    paddingBottom: 0,
    alignItems: 'flex-end',
  },
  menuItems: {
    width: '100%',
    flexDirection: 'row',
  },
  hidden: {
    display: 'none',
  },
  buttonContainer: {
    margin: 'auto',
    alignItems: 'center',
    gap: 8,
  },
  button: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFCD06',
    borderRadius: 100,
  },
  buttonLabel: {
    paddingHorizontal: 6,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
  },
});
