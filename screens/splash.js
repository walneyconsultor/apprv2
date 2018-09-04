import React, { Component } from 'react';
import Logo from  '../assets/img/logo2.png';

import {
    Container,
    Content,
    Thumbnail,
} from 'native-base'

import { RoundedButton } from '../components/components';

class Splash extends Component {
    render() {
        return (
            <Container>
                <Thumbnail squared source={ Logo } />
                <Content>
                    <RoundedButton 
                        pressed={ () => this.props.navigation.navigate('Account') } 
                        title="Já possui uma conta" />
                    <RoundedButton 
                        pressed={ () => this.props.navigation.navigate('Register') }
                        title="Crie sua conta agora" />
                </Content>
            </Container>
        )
    }
    
}


export default Splash;
