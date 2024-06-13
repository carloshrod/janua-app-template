import 'react-native-gesture-handler';
/**
 * @format
 */
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { es, registerTranslation } from 'react-native-paper-dates';
registerTranslation('es', es);

AppRegistry.registerComponent(appName, () => App);
