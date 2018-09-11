import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

import Logo from  '../assets/img/logo2.png';

import Feedback from '../assets/img/feedback.png';

export default class CardImageExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail square source={ Logo } />
                <Body>
                  <Text>AppRV</Text>
                  <Text note>App de Reciclagem Inteligente</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={ Feedback } style={{height: 200, width: null, flex: 1}} />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
          <RoundedButton 
            pressed={ () => this.props.navigation.navigate('Splash') } 
            title="Voltar" />
        </Content>
      </Container>
    );
  }
}