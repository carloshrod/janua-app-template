import { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Icon } from 'react-native-paper';
import { AccordionCard } from './AccordionCard';

interface AccordionProps {
  label: string;
  logs: LogsProps[];
}

export const Accordion = (props: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View style={styles.accordion}>
      <Pressable style={styles.pressable} onPress={handleOpen}>
        <View style={styles.pressableLeft}>
          <Icon
            source={isOpen ? 'chevron-up' : 'chevron-down'}
            size={24}
            color='#FFCD06'
          />
          <Text style={styles.pressableLabel}>{props.label}</Text>
        </View>
        <View style={styles.logLength}>
          <Text style={styles.logLengthLabel}>{props?.logs?.length}</Text>
        </View>
      </Pressable>
      {isOpen ? <AccordionCard logs={props.logs} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  accordion: {
    width: '100%',
    gap: 8,
    marginBottom: 16,
  },
  pressable: {
    width: '100%',
    height: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
    backgroundColor: '#000000',
    borderRadius: 8,
  },
  pressableLeft: {
    flexDirection: 'row',
  },
  pressableLabel: {
    marginLeft: 24,
    fontFamily: 'DMSans-Medium',
    fontSize: 18,
    color: '#FFCD06',
  },
  logLength: {
    height: 20,
    minWidth: 26,
    paddingHorizontal: 2,
    backgroundColor: '#E4E8EB',
    borderRadius: 6,
  },
  logLengthLabel: {
    textAlign: 'center',
    fontFamily: 'DMSans-Bold',
    fontSize: 16,
  },
});
