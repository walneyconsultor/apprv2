import { createStackNavigator } from 'react-navigation';

import Login from '../screens/login';
import Splash from '../screens/splash';
import InfoRecycle from '../screens/infoRecycle';
import Account from '../screens/account';
import AccountColetor from '../screens/accountColetor';
import Register from '../screens/register';
import Perfil from '../screens/perfil';
import Maps from '../screens/maps';
import PerfilColetor from '../screens/perfilColetor';
import Materials from '../screens/materials';
import ListMetal from '../screens/listMetal';
import Feedback from '../screens/feedback';
import SelectProfileRole from '../screens/selectProfileRole';

const AppNavigator = createStackNavigator({

   
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Login',
        }
    },
    Splash: {
        screen: Splash,
        navigationOptions: {
            title: 'Splash',
        }
    },
    Maps:{
        screen:Maps,
        navigationOptions:{
            title:'Maps',
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
    ListMetal: {
        screen: ListMetal,
        navigationOptions: {
            title: 'ListMetal',
        }
    },
    
    Feedback: {
        screen: Feedback,
        navigationOptions:{
            title:  'Feedback'
        }
    },
    InfoRecycle: {
        screen: InfoRecycle,
        navigationOptions: {
            title: 'InfoRecycle',
        }
    }


}, { headerMode: 'none' })

export default AppNavigator;