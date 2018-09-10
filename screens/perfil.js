import React, { Component } from 'react';

import { Container, Header, Content, Thumbnail, Text, Card, Body, CardItem } from 'native-base';

import Perfil from  '../assets/img/perfil.png';

import { RoundedButton } from '../components/components';


export default class ThumbnailExample extends Component {
  render() {
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
    return (
      <Container>
        <Header />
        <Content>
          <Text>Seu Perfil</Text>
          <Thumbnail style={{
                  width: 280,
                  height: 280,
                  marginTop: 20,
                  marginBottom: 10,
                  marginLeft: 'auto',
                  marginRight: 'auto'
                }} square large source = { Perfil } />
          <Card>
            <CardItem>
              <Body>
                  <Text>
                   SEU ID: 01051979 - RV
                  </Text>
                  <Text>
                   NOME: WALNEY WILLAME
                  </Text>
                  <Text>
                   RANKING RV: DOADOR
                  </Text>
                  <Text>
                   VOCE TEM: RV 0,2314
                  </Text>
              </Body>
            </CardItem>
          </Card>
          <RoundedButton 
                        pressed={ () => this.props.navigation.navigate('Materials') } 
                        title="SELECIONAR MATERIAIS" />
        </Content>
      </Container>
    );
  }
}

