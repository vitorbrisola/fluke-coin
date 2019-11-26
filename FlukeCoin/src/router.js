import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './pages/home'
import ExplorerScreen from './pages/explorer'

const MainNavigator = createStackNavigator(
    {
    Home: {screen: HomeScreen},
    Explorer: {screen: ExplorerScreen},
    }
);
  
const App = createAppContainer(MainNavigator);
  
export default App;