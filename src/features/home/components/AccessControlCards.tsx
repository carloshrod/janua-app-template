import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Icon } from 'react-native-paper';
import { ACCESS_CONTROL_ITEMS } from '../../../utils/arrays';

export const AccessControlCards = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AccessControlNavigatorProps>>();

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.contentContainer}
        columnWrapperStyle={styles.columnWrapper}
        data={ACCESS_CONTROL_ITEMS}
        renderItem={({ item }) => (
          <Pressable
            style={styles.gridItem}
            onPress={() =>
              navigation.navigate(
                item.navigateTo as keyof AccessControlNavigatorProps,
              )
            }>
            <Icon source={item.icon} size={32} color='#000000' />
            <Text style={styles.gridItemLabel}>{item.label}</Text>
          </Pressable>
        )}
        keyExtractor={item => item.label}
        numColumns={numColumns}
      />
    </View>
  );
};

const numColumns = 2;

const styles = StyleSheet.create({
  container: {
    maxWidth: 600,
    flex: 1,
    alignItems: 'center',
    paddingBottom: 8,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  contentContainer: {
    paddingHorizontal: 16,
  },
  gridItem: {
    width: '48%',
    height: 108,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    marginVertical: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
  gridItemLabel: {
    width: '70%',
    marginTop: 8,
    textAlign: 'center',
    fontFamily: 'DMSans-Bold',
    fontSize: 14,
    color: '#25292E',
  },
});
