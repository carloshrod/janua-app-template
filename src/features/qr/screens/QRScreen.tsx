import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import { ProtectedLayout } from '../../../components';
import { QRCard } from '../components/QRCard';
import { ImportantCard } from '../components/ImportantCard';

export const QRScreen = () => {
  return (
    <ProtectedLayout>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <QRCard />
        <ImportantCard />
      </ScrollView>
    </ProtectedLayout>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    maxWidth: 600,
    gap: 16,
    paddingVertical: 32,
  },
});
