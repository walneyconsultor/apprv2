import React, { Component } from 'react';
import { Container,Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

import Metal from  '../assets/img/icons-recycle/png/028-metal.png';
import Plastic from  '../assets/img/icons-recycle/png/024-plastic.png';
import Glass from  '../assets/img/icons-recycle/png/027-glass-bin.png';
import Paper from  '../assets/img/icons-recycle/png/026-paper-bin.png';
import Battery from  '../assets/img/icons-recycle/png/045-battery-2.png';

import { RoundedButton } from '../components/components';

export default class MaterialsList extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List style={{ marginTop: 30 }}>
            <ListItem thumbnail>
              <Left>
              <Thumbnail square large source={ Metal } />
              </Left>
              <Body>
                <Text>Metal</Text>
                <Text note numberOfLines={1}>Metal Reciclável</Text>
              </Body>
              <Right>
                <Button 
                rounded
                success
                onPress={ () => this.props.navigation.navigate('Feedback') }>
                  <Text>Add+</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
              <Thumbnail square large source={ Plastic } />
              </Left>
              <Body>
                <Text>Plástico</Text>
                <Text note numberOfLines={1}>Garrafa PET</Text>
              </Body>
              <Right>
                <Button>
                  <Text>Item</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
              <Thumbnail square large source={ Glass } />
              </Left>
              <Body>
                <Text>Vidro</Text>
                <Text note numberOfLines={1}>Vidros</Text>
              </Body>
              <Right>
                <Button>
                  <Text>Item</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
              <Thumbnail square large source={ Paper } />
              </Left>
              <Body>
                <Text>Papel</Text>
                <Text note numberOfLines={1}>Papelão</Text>
              </Body>
              <Right>
                <Button>
                  <Text>Item</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
              <Thumbnail square large source={ Battery } />
              </Left>
              <Body>
                <Text>Bateria</Text>
                <Text note numberOfLines={1}>Celular</Text>
              </Body>
              <Right>
                <Button>
                  <Text>Item</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
          <RoundedButton 
            pressed={ () => this.props.navigation.navigate('Feedback') } 
            title="ENVIAR" />
        </Content>
      </Container>
    );
  }
} 