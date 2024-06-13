import { View, Text, StyleSheet, Image } from 'react-native';
import { MaxSpeedIcon, NoGarbageIcon, ShowQrIcon } from '../../../assets/icons';

export const ImportantCard = () => {
  return (
    <View style={styles.important}>
      <Text style={styles.importantText}>¡Importante!</Text>
      <View style={styles.importantLogoContainer}>
        <View style={styles.importantLogo}>
          <Image source={MaxSpeedIcon} />
          <Text style={styles.importantLogoText}>Velocidad Máxima</Text>
        </View>
        <View style={styles.importantLogo}>
          <Image source={ShowQrIcon} />
          <Text style={styles.importantLogoText}>Mostrar código QR</Text>
        </View>
        <View style={styles.importantLogo}>
          <Image source={NoGarbageIcon} />
          <Text style={styles.importantLogoText}>No tire basura</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  important: {
    width: '100%',
    alignItems: 'center',
    gap: 16,
    paddingTop: 8,
    paddingHorizontal: 38,
    paddingBottom: 30,
    borderWidth: 1,
    borderColor: '#FFCD06',
    borderRadius: 16,
  },
  importantText: {
    fontFamily: 'DMSans-Bold',
    fontSize: 16,
    color: '#FFFFFF',
  },
  importantLogoContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  importantLogo: {
    alignItems: 'center',
    gap: 8,
  },
  importantLogoText: {
    width: 70,
    textAlign: 'center',
    fontFamily: 'DMSans-Bold',
    fontSize: 12,
    color: '#FFFFFF',
  },
});
