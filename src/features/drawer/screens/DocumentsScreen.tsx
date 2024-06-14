import { FlatList, StyleSheet } from 'react-native';
import { ProtectedLayout } from '../../../components';
import { DOCUMENTS_ITEMS } from '../../../utils/arrays';
import { DocumentCard } from '../components/DocumentCard';

export const DocumentsScreen = () => {
  return (
    <ProtectedLayout>
      <FlatList
        contentContainerStyle={styles.scrollContainer}
        style={styles.container}
        data={DOCUMENTS_ITEMS}
        renderItem={({ item }) => <DocumentCard {...item} />}
        keyExtractor={(item, index) => `${item.title}-${index}`}
        showsVerticalScrollIndicator={false}
      />
    </ProtectedLayout>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    gap: 16,
    paddingVertical: 16,
  },
  container: {
    width: '100%',
    maxWidth: 600,
  },
});
