import { Alert, FlatList, StyleSheet } from 'react-native';
import { FloatingAction } from 'react-native-floating-action';
import { ProtectedLayout } from '../../../components';
import { ACTIONS, VISITOR_LOGS_ITEMS } from '../../../utils/arrays';
import { Accordion } from '../components/Accordion';

export const VisitorLogsScreen = () => {
  return (
    <ProtectedLayout>
      <FlatList
        style={styles.container}
        data={VISITOR_LOGS_ITEMS}
        renderItem={({ item }) => <Accordion {...item} />}
        keyExtractor={item => item.label}
        showsVerticalScrollIndicator={false}
      />
      <FloatingAction
        actions={ACTIONS}
        onPressItem={name => {
          Alert.alert(`Agregando: ${name}`);
        }}
        color='#FFCD06'
      />
    </ProtectedLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 600,
    paddingVertical: 16,
  },
});
