import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './Login' ;
import Home from './Home';
// import Dashboard from '../pages/Dashboard';

const mainNavigation = createStackNavigator({
  // Login:Login,
  // Home: Home,
  Login: {
    screen: Login,
    navigationOptions:{
      headerShown: false
    }
  },
  Home: {
    screen: Home,
    navigationOptions:{
      headerShown: 'Home'
    }
  },
  
});

export default createAppContainer(mainNavigation);