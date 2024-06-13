import { useNavigation, useRoute } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-paper';

export const GoBack = ({ top = 20, left = 20 }) => {
  const navigation = useNavigation();
  const { name } = useRoute();
  const isLight = name?.toLowerCase() === 'vehículos';

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.touchable, { top, left }]}
      onPress={() => navigation.goBack()}>
      <Icon
        source='arrow-left'
        size={24}
        color={isLight ? '#25292E' : '#FFFFFF'}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    position: 'absolute',
  },
});
