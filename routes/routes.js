import { createStackNavigator } from 'react-navigation';

import Splash from '../screens/splash';
import Info from '../screens/info';
import Account from '../screens/account';
import AccountColetor from '../screens/accountColetor';
import Register from '../screens/register';
import Perfil from '../screens/perfil';
import PerfilColetor from '../screens/perfilColetor';
import Materials from '../screens/materials';
import Feedback from '../screens/feedback';
import SelectProfileRole from '../screens/selectProfileRole';

const AppNavigator = createStackNavigator({

       
    Splash: {
        screen: Splash,
        navigationOptions: {
            title: 'Splash',
        }
    },
    SelectProfileRole: {
        screen: SelectProfileRole,
        navigationOptions:{
            title:  'SelectProfileRole'
        }
    },

    Account: {
        screen: Account,
        navigationOptions:{
            title:  'Account'
        }
        
    },
    AccountColetor: {
        screen: AccountColetor,
        navigationOptions:{
            title:  'AccountColetor'
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
    PerfilColetor: {
        screen: PerfilColetor,
        navigationOptions: {
            title: 'PerfilColetor'
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
    Info: {
        screen: Info,
        navigationOptions: {
            title: 'Info',
        }
    },
    

}, { headerMode: 'none' })

export default AppNavigator;