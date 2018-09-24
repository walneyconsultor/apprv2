import React, { Component } from 'react';
import { Image } from 'react-native';

import { Container,Content, Card, CardItem, Thumbnail, Text, Left, Button, Body, Right} from 'native-base';

import Logo from  '../assets/img/logo2.png';

import Feedback from '../assets/img/feedback.png';

export default class FeedbackPainel extends Component {

  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail square source={ Logo } />
                <Right>
                  <Text>AppRV</Text>
                  <Text note>App de Reciclagem Inteligente</Text>
                </Right>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={ Feedback } style={{height: 200, width: null, flex: 1}} />
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}