import { createStackNavigator } from 'react-navigation';

import Splash from '../screens/splash';
import Account from '../screens/account';
import Register from '../screens/register';
import Perfil from '../screens/perfil';
import Materials from '../screens/materials';
import Feedback from '../screens/feedback';
import Selectprofilerole from '../screens/selectprofilerole';

const AppNavigator = createStackNavigator({

    Splash: {
        screen: Splash,
        navigationOptions: {
            title: 'Splash',
            
            }
    },
    Selectprofilerole: {
        screen: Selectprofilerole,
        navigationOptions:{
            title:  'Selectprofilerole'
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
    },
    
    Feedback: {
        screen: Feedback,
        navigationOptions:{
            title:  'Feedback'
        }
    },
    

}, { headerMode: 'none' })

export default AppNavigator;