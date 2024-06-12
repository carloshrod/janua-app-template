import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigator } from './src/navigators';

function App() {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}

export default App;
