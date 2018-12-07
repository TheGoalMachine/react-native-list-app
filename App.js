import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

import ListScreen from './screens/ListScreen';
import DetailScreen from './screens/DetailScreen';

import { StatusBar } from 'react-native';

// Change the text colour to white (iOS only)
StatusBar.setBarStyle('light-content');


const RootNavigator = createStackNavigator(
    {
        Home: ListScreen,
        Detail: DetailScreen,
    },{
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#2a3daa'
            },
            headerTintColor: '#ffffff'
        }
    });


export default createAppContainer(RootNavigator);
