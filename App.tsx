import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigator } from './src/navigators';
import { enableScreens } from 'react-native-screens';

enableScreens();

function App() {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}

export default App;
