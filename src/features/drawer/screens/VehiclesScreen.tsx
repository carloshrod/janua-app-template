import { Alert, StyleSheet, Text, View } from 'react-native';
import { CustomButton, ProtectedLayout } from '../../../components';
import { Icon } from 'react-native-paper';

export const VehiclesScreen = () => {
  const noVehicle = 'No hay vehículos registrados';
  const vehicleName = 'Todos tus vehículos aparecerán aquí';

  return (
    <ProtectedLayout>
      <View style={styles.eventContainer}>
        <Icon source='car' size={80} color='#25292E' />
        <Text style={styles.eventName}>{noVehicle}</Text>
        <Text style={styles.vehicleName}>{vehicleName}</Text>
        <CustomButton
          label='Registrar vehículos'
          width={200}
          onPress={() => Alert.alert('Registrando vehículos!')}
        />
      </View>
    </ProtectedLayout>
  );
};

const styles = StyleSheet.create({
  eventContainer: {
    width: '80%',
    minWidth: 250,
    alignItems: 'center',
    margin: 'auto',
  },
  eventName: {
    marginTop: 16,
    textAlign: 'center',
    fontFamily: 'DMSans-Bold',
    fontSize: 24,
    color: '#000000',
  },
  vehicleName: {
    marginTop: 24,
    marginBottom: 48,
    textAlign: 'center',
    fontFamily: 'DMSans-Bold',
    fontSize: 18,
    color: '#898F98',
  },
});
