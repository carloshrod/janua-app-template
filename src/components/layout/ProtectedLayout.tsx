import { useRoute } from '@react-navigation/native';
import { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import Navbar from './Navbar';

export const ProtectedLayout = ({ children }: { children: ReactNode }) => {
  const { name } = useRoute();
  const BG_LIGHT = ['eventos', 'vehiculos'];
  const isBgDark = !BG_LIGHT.includes(name?.toLowerCase());

  return (
    <>
      <Navbar />
      <View
        style={[styles.container, isBgDark ? styles.bgDark : styles.bgLight]}>
        {children}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  bgDark: {
    backgroundColor: '#25292E',
  },
  bgLight: {
    backgroundColor: '#FFFFFF',
  },
});
