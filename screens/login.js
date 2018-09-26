import React, { Component } from 'react';

import {TouchableOpacity} from 'react-native';

import Logo from  '../assets/img/logo3.png';

import {
    Container,
    Content,
    Thumbnail,
    Body

} from 'native-base'

import styles from './styles/styles';

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
                <TouchableOpacity
                    onPress={ () => this.props.navigation.navigate('InfoRecycle') }>
                <Thumbnail style={{
                  width: 200,
                  height: 190,
                  marginTop: 10,
                  marginBottom: 10,
                }} square large source={ Logo } />
                </TouchableOpacity>
                </Body>
                </Content>
                <Content contentContainerStyle={{
                  marginTop: 30,
                  justifyContent: 'flex-start',
                  display: 'flex',
                  flex: 1,
                  flexDirection: 'column'}}>
                    <RoundedButton pressed={ () => this.props.navigation.navigate('Splash') } title="FAÇA LOGIN"/>
                    <RoundedButton pressed={ () => this.props.navigation.navigate('SelectProfileRole') } title="OU CRIE A SUA CONTA"/>
                </Content>
            </Container>
        )
    }

}


export default Splash;
