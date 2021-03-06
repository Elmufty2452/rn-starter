import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/myComponents'
import ListScreen from './src/screens/ListScreen'
import ImageScreen from './src/screens/imageScreens'
import CounterScreen from './src/screens/CounterScreen'
import ColorScreen from './src/screens/ColorScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image:ImageScreen,
    Counter: CounterScreen,
    Colors: ColorScreen

  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'My App',
    },
  }
);

export default createAppContainer(navigator);
