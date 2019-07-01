import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen'
import selectLanguage from './selectLanguage'
import LoginEN from './LoginEN'
import LoginTH from './LoginTH'

const AppNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
  SelectLan: {screen: selectLanguage},
  LoginEN: {screen: LoginEN},
  LoginTH: {screen: LoginTH},
});

const App = createAppContainer(AppNavigator);

export default App