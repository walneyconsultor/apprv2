import React, { Component } from 'react';
import Logo from  '../assets/img/logo2.png';

import {
    Container,
    Content,
    Thumbnail,
    Text,
    Form,
    Item,
    Header,
    Input,
    Body,
    Title,
    Label
} from 'native-base'

import styles from './styles/styles.js';

import { RoundedButton } from '../components/components';

class Splash extends Component {
    render() {
        return (
            
            <Container style={ styles.bgLightGreen }>
                <Content style={{ marginTop: 30 }}>
                <Thumbnail square large source={ Logo } />
                    <Form>
                        <Item floatingLabel>
                            <Label>Insira seu nome de usuário</Label>
                        <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>insira sua senha</Label>
                        <Input />
                        </Item>
                     </Form>
                </Content>
                <Content>
                    <RoundedButton 
                        pressed={ () => this.props.navigation.navigate('Perfil') } 
                        title="LOGIN" />
                    <Text>Ainda não tem conta? Cadastre-se aqui.</Text>
                    <RoundedButton 
                        pressed={ () => this.props.navigation.navigate('Register') }
                        title="CRIAR UMA CONTA" />
                </Content>
            </Container>
        )
    }
    
}


export default Splash;
