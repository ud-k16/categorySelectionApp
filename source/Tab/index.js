import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import WelcomeScreen from '../screens/welcome';
import Categories from '../screens/categories';

const Tab = createMaterialTopTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Welcome" component={WelcomeScreen} />
      <Tab.Screen name="Categories" component={Categories} />
    </Tab.Navigator>
  );
};
export default TabNavigation;
