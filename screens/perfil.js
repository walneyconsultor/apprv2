import React, { Component } from 'react';

import { Container, Header, Content, Thumbnail, Text } from 'native-base';

import Perfil from  '../assets/img/perfil.png';

export default class ThumbnailExample extends Component {
  render() {
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
    return (
      <Container>
        <Header />
        <Content>
          <Text>Seu Perfil</Text>
          
          <Thumbnail square large source = { Perfil } />
          
        </Content>
      </Container>
    );
  }
}

