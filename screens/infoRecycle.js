import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
const cards = [
  {
    text: 'Latinhas',
    name: 'Texto 1',
    image: require('../assets/img/latinha.png'),
  },
  {
    text: 'Card Two',
    name: 'One',
    image: require('../assets/img/pneu.png'),
  },
  {
    text: 'Card Tree',
    name: 'One',
    image: require('../assets/img/vidro.jpg'),
  },
  {
    text: 'Card Four',
    name: 'One',
    image: require('../assets/img/bateria.jpg'),
  }
];
export default class InfoRecycleList extends Component {
  render() {
    return (
      <Container>
        <Header />
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail square source={item.image} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>Materiais Recicláveis</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 320, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            }
          />
        </View>
      </Container>
    );
  }
}