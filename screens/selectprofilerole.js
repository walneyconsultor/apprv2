import React, { Component } from 'react';

import { Container, Content, Thumbnail, Text, } from 'native-base';

import userIcon from  '../assets/img/icone-cidadao-consciente.png';

import coletorIcon from '../assets/img/coletormini.png';

import { RoundedButton } from '../components/components';


export default class ThumbnailExample extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Text>Seu Perfil</Text>

        <Thumbnail style={{
                  width: 140,
                  height: 140,
                  marginTop: 20,
                  marginBottom: 10,
                  marginLeft: 'auto',
                  marginRight: 'auto'
                }}
                square large source = { userIcon } />
        <RoundedButton 
            pressed={ () => this.props.navigation.navigate('Account') } 
            title="Usuario RV" />

        <Thumbnail style={{
                  width: 270,
                  height: 160,
                  marginTop: 20,
                  marginBottom: 10,
                  marginLeft: 'auto',
                  marginRight: 'auto'
                }}
                large source = { coletorIcon } />
          <RoundedButton 
            pressed={ () => this.props.navigation.navigate('Account') } 
            title="Coletor RV" />
        </Content>
      </Container>
    );
  }
}
