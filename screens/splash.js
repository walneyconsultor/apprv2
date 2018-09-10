import React, { Component } from 'react';
import Logo from  '../assets/img/logo2.png';

import {
    Container,
    Content,
    Thumbnail,
    
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
                <Thumbnail style={{
                  width: 140,
                  height: 140,
                  marginTop: 20,
                  marginBottom: 10,
                  marginLeft: 'auto',
                  marginRight: 'auto'
                }} square large source={ Logo } />
                </Content>
                <Content contentContainerStyle={{
                  marginTop: 50,
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  display: 'flex',
                  flex: 1,
                  flexDirection: 'column'}}>
                    <RoundedButton pressed={ () => this.props.navigation.navigate('Selectprofilerole') } title="FAÇA LOGIN"/>
                    <RoundedButton pressed={ () => this.props.navigation.navigate('Register') } title="OU CRIE A SUA CONTA"/>
                </Content>

            </Container>
        )
    }

}


export default Splash;
