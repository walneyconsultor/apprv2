import React, { Component } from 'react';

import { Container, Content, Thumbnail, Text, CardItem, } from 'native-base';

import userIcon from  '../assets/img/UserGreen2.png';

import coletorIcon from '../assets/img/man2.png';

import { RoundedButton } from '../components/components';


export default class SelectProfile extends Component {
  render() {
    return (
      <Container>
        <Content padder>
        <Card>
          <CardItem header bordered>
          <Text>Selecione o tipo de Cliente que vc é: </Text>
          </CardItem>
        </Card>
        </Content>
        <Content>
          <Text>Seu Perfil</Text>

        <Thumbnail style={{
                  width: 128,
                  height: 128,
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
                  width: 128,
                  height: 128,
                  marginTop: 20,
                  marginBottom: 10,
                  marginLeft: 'auto',
                  marginRight: 'auto'
                }}
                large source = { coletorIcon } />
          <RoundedButton 
            pressed={ () => this.props.navigation.navigate('AccountColetor') } 
            title="Coletor RV" />
        </Content>
      </Container>
    );
  }
}
