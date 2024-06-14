import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import { ActionMenu } from './ActionMenu';

export const AccordionCard = ({ logs }: { logs: LogsProps[] }) => {
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);

  const toggleMenu = (index: number) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  return (
    <>
      {logs.map(({ title, date, description }, index: number) => (
        <View key={`${title}-${index}`} style={styles.card}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardDate}>{date}</Text>
          <Text style={styles.cardText}>{description}</Text>
          <ActionMenu
            isOpen={openMenuIndex === index}
            onToggle={() => toggleMenu(index)}
          />
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    padding: 16,
    backgroundColor: '#000000',
    borderRadius: 8,
  },
  cardTitle: {
    fontFamily: 'DMSans-Bold',
    fontSize: 16,
    color: '#FFFFFF',
  },
  cardDate: {
    fontFamily: 'DMSans-Regular',
    fontSize: 16,
    color: '#FFCD06',
  },
  cardText: {
    marginTop: 8,
    fontFamily: 'DMSans-Regular',
    fontSize: 14,
    color: '#FFCD06',
  },
});
