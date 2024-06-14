import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';
import { Icon } from 'react-native-paper';

interface DocumentCardProps {
  title: string;
  subtitle: string;
  description: string;
  date: string;
}

export const DocumentCard = ({
  title,
  subtitle,
  description,
  date,
}: DocumentCardProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.iconContainer}>
          <Icon source='file-document' size={20} color='#000000' />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.textRegular}>{subtitle}</Text>
        </View>
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.textRegular}>{description}</Text>
        <Text style={styles.textRegular}>{date}</Text>
      </View>
      <Pressable
        style={styles.cardFooter}
        onPress={() => Alert.alert('Viendo documento!')}>
        <Text style={[styles.textRegular, styles.textSoft]}>VER DOCUMENTO</Text>
        <Icon source='paperclip' size={20} color='#000000' />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    gap: 8,
    paddingVertical: 16,
    paddingHorizontal: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
  cardHeader: {
    flexDirection: 'row',
    gap: 16,
  },
  iconContainer: {
    width: 58,
    height: 58,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E4E8EB',
    borderRadius: 50,
  },
  documentIcon: {
    height: 20,
    width: 20,
  },
  titleContainer: {
    gap: 8,
  },
  cardTitle: {
    fontFamily: 'DMSans-Medium',
    fontSize: 18,
    color: '#000000',
  },
  cardBody: {
    gap: 4,
    padding: 16,
    backgroundColor: '#F4F5F7',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 4,
    padding: 2,
  },
  textRegular: {
    fontFamily: 'DMSans-Regular',
    fontSize: 12,
    color: '#000000',
  },
  textSoft: {
    color: '#25292E',
  },
});
