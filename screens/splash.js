import React, { Component } from 'react';

import Logo from  '../assets/img/logo2.png';

import {
    Container,
    Content,
    Thumbnail,
    Body,
    Fab,
    Button,
    Icon
    
} from 'native-base'

import styles from './styles/styles.js';

import { RoundedButton } from '../components/components';

class Splash extends Component {
  
    render() {
        return (

            <Container
              style={ styles.bgLightGreen }>
                <Content
                  contentContainerStyle={{
                    flex: 2,
                    marginTop: 30
                  }}>

                  <Body>
                <Thumbnail style={{
                  width: 140,
                  height: 140,
                  marginTop: 20,
                  marginBottom: 10,
                }} square large source={ Logo } />
                </Body>
                </Content>
                <Content contentContainerStyle={{
                  marginTop: 30,
                  justifyContent: 'flex-start',
                  display: 'flex',
                  flex: 1,
                  flexDirection: 'column'}}>
                    <RoundedButton pressed={ () => this.props.navigation.navigate('SelectProfileRole') } title="FAÇA LOGIN"/>
                    <RoundedButton pressed={ () => this.props.navigation.navigate('Register') } title="OU CRIE A SUA CONTA"/>
                    
                </Content>

            </Container>
        )
    }

}


export default Splash;
