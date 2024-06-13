import { StyleSheet, Text, View } from 'react-native';
import { ProtectedLayout } from '../../../components';
import { AccessControlCards } from '../components/AccessControlCards';
import { CustomSwitch } from '../components/Switch';

export const AccessControlScreen = () => {
  return (
    <ProtectedLayout>
      <View style={styles.allow}>
        <Text style={styles.allowText}>Permitir visitas</Text>
        <CustomSwitch />
      </View>
      <Text style={styles.title}>
        Mantené el control de tus visitas desde cualquier lugar
      </Text>
      <AccessControlCards />
    </ProtectedLayout>
  );
};

const styles = StyleSheet.create({
  allow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
    marginBottom: 24,
  },
  allowText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#FFFFFF',
  },
  title: {
    marginBottom: 24,
    textAlign: 'center',
    fontFamily: 'DMSans-Regular',
    fontSize: 16,
    color: '#FFFFFF',
  },
});
