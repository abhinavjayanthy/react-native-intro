import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreens"

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    ComponentScreen:ComponentScreen
  },
  {
    initialRouteName: "ComponentScreen",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
