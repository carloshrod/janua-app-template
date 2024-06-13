import { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Switch } from 'react-native-paper';

export const CustomSwitch = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View style={styles.switchContainer}>
      <Text style={styles.label}>{isSwitchOn ? 'SÍ' : 'NO'}</Text>
      <Switch
        color='#45B732'
        value={isSwitchOn}
        onValueChange={onToggleSwitch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginRight: 4,
    color: '#FFFFFF',
  },
});
