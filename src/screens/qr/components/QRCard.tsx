import { View, Text, StyleSheet, Image } from 'react-native';
import { MainLogo, QRExample } from '../../../assets/images';

const QRCard = () => {
  const createdAt = '24/01/2024 18:00 hs';
  const expiresAt = '25/01/2024 18:00 hs';
  const guest = 'Luis Perez';

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={MainLogo} />
      <View style={styles.scanContainer}>
        <Image style={styles.image} source={QRExample} />
        <Text style={styles.scanText}>SCAN ME</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.infoText}>Creado: {createdAt}</Text>
        <Text style={styles.infoText}>Expira: {expiresAt}</Text>
        <Text style={styles.infoText}>Invitado: {guest}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    alignItems: 'center',
    gap: 16,
    paddingTop: 96,
    paddingHorizontal: 64,
    paddingBottom: 40,
    marginTop: 40,
    borderWidth: 1,
    borderColor: '#FFCD06',
    borderRadius: 16,
  },
  logo: {
    position: 'absolute',
    top: -45,
  },
  scanContainer: {
    minWidth: 185,
    minHeight: 226,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    backgroundColor: '#FFCD06',
    borderRadius: 16,
  },
  image: {
    maxWidth: 300,
    maxHeight: 300,
  },
  scanText: {
    fontFamily: 'Inter-ExtraBold',
    fontSize: 25,
    color: '#000000',
  },
  info: {
    gap: 8,
  },
  infoText: {
    fontFamily: 'DMSans-Bold',
    fontSize: 14,
    color: '#FFFFFF',
  },
});

export default QRCard;
