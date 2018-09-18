import React, { Component } from 'react';

import { Container, Header, Content, Thumbnail, Text, Card, Body, CardItem } from 'native-base';

import PerfilColetor from  '../assets/img/coletor2.png';

import { RoundedButton } from '../components/components';


export default class ColetorPerfil extends Component {
  render() {
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
    return (
      <Container>
        <Header />
        <Text style={{
            marginTop: 10,
            color:'green',
            marginLeft: 'auto',
            marginRight: 'auto'
            }}>PERFIL COLETOR</Text>
        <Content>
          
          <Thumbnail style={{
                  width: 200,
                  height: 200,
                  marginTop: 20,
                  marginBottom: 10,
                  marginLeft: 'auto',
                  marginRight: 'auto'
                }} square large source = { PerfilColetor } />
          <Card>
            <CardItem>
              <Body>
                  <Text>
                   IDCOLETOR: 232646 - CRV
                  </Text>
                  <Text>
                   NOME: LINDOMAR NAZARENO DA SILVA
                  </Text>
                  <Text>
                   COOPERATIVA: CONCALVES S/A
                  </Text>
                  <RoundedButton 
                        pressed={ () => this.props.navigation.navigate('Maps') } 
                        title="VERIFICAR COLETAS" />
              </Body>
            </CardItem>
          </Card>
          
        </Content>
      </Container>
    );
  }
}

