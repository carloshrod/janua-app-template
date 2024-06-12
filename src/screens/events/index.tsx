import { View, Text, Image } from 'react-native';
import { ProtectedLayout } from '../../components';
import { CustomButton } from '../../components/CustomButton';
import { Alert } from 'react-native';
import { StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProtectedScreensTabNavigatorProps } from '../../navigators';
import { FC } from 'react';
import { Calendar } from '../../assets/images';

export const EventsScreen: FC<
  NativeStackScreenProps<ProtectedScreensTabNavigatorProps, 'Eventos'>
> = () => {
  const eventName = 'Sin eventos programados';
  const guestsName = 'Agregue un invitado y se mostrará aquí';

  return (
    <ProtectedLayout>
      <Text style={styles.screenName}>Eventos</Text>
      <View style={styles.eventContainer}>
        <Image source={Calendar} />
        <Text style={styles.eventName}>{eventName}</Text>
        <Text style={styles.guestsName}>{guestsName}</Text>
        <CustomButton
          label='Agregar Invitados'
          width={200}
          onPress={() => Alert.alert('Agregando invitados!')}
        />
      </View>
    </ProtectedLayout>
  );
};

const styles = StyleSheet.create({
  screenName: {
    marginTop: 16,
    fontFamily: 'DMSans-Bold',
    fontSize: 18,
  },
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
  },
  guestsName: {
    marginTop: 24,
    marginBottom: 48,
    textAlign: 'center',
    fontFamily: 'DMSans-Bold',
    fontSize: 18,
    color: '#898F98',
  },
});
