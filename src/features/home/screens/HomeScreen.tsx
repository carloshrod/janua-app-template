import { FlatList, StyleSheet, Text } from 'react-native';
import { FC } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProtectedLayout } from '../../../components';
import { NAVLINK_LABELS } from '../../../utils/arrays';
import { NavLink } from '../components/NavLink';
import {
  HomeNavigationProp,
  HomeStackNavigatorProps,
} from '../../../navigators/HomeStackNavigator';
import { useNavigation } from '@react-navigation/native';

export const HomeScreen: FC<
  NativeStackScreenProps<HomeStackNavigatorProps, 'Home'>
> = () => {
  const user = 'Leonardo';
  const navigation = useNavigation<HomeNavigationProp>();

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
