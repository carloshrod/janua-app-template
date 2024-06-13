import { FlatList, StyleSheet, Text } from 'react-native';
import { FC } from 'react';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { ProtectedLayout } from '../../../components';
import { NavLink } from '../components/NavLink';
import { NAVLINK_LABELS } from '../../../utils/arrays';

export const HomeScreen: FC<
  NativeStackScreenProps<HomeStackNavigatorProps, 'Home'>
> = () => {
  const user = 'Leonardo';
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackNavigatorProps>>();

  return (
    <ProtectedLayout>
      <Text style={styles.title}>Bienvenido {user}</Text>
      <Text style={styles.subTitle}>¿En qué podemos ayudarte?</Text>
      <FlatList
        style={styles.navContainer}
        data={NAVLINK_LABELS}
        renderItem={({ item }) => (
          <NavLink
            {...item}
            onPress={() => navigation.navigate('Control de Visitas')}
          />
        )}
        keyExtractor={item => item.label}
        showsVerticalScrollIndicator={false}
      />
    </ProtectedLayout>
  );
};

const styles = StyleSheet.create({
  title: {
    paddingTop: 16,
    marginBottom: 8,
    fontFamily: 'DMSans-Bold',
    fontSize: 24,
    color: '#FFFFFF',
  },
  subTitle: {
    fontFamily: 'DMSans-Regular',
    fontSize: 16,
    color: '#FFFFFF',
  },
  navContainer: {
    width: '100%',
    maxWidth: 400,
    flex: 1,
    marginTop: 32,
  },
});
