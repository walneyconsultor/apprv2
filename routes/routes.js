import { createStackNavigator } from 'react-navigation';

import Splash from '../screens/splash';

import Account from '../screens/account';

import Register from '../screens/register';

import Perfil from '../screens/perfil';

import Materials from '../screens/materials';

const AppNavigator = createStackNavigator({

    
    Splash: {
        screen: Splash,
        navigationOptions: {
            title: 'Splash',
            headerTintColor:'white',
            headerStyle:{
                backgroudcolor:'green',
                borderBottomWidth:1,
                borderBottomColor:'#C5C5C5',
            }
        }
    },

    Account: {
        screen: Account,
        navigationOptions:{
            title:  'Account'
        }
    },
    Register: {
        screen: Register,
        navigationOptions:{
            title:  'Register'
        }
    },
    Perfil: {
        screen: Perfil,
        navigationOptions: {
            title: 'Perfil'
        }
    },
    Materials: {
        screen: Materials,
        navigationOptions:{
            title:  'Materials'
        }
    }
    

}, { headerMode: 'none' })

export default AppNavigator;