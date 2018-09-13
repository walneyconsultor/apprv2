import React, { Component } from 'react';

import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import { RoundedButton } from '../components/components';
export default class FormCadastro extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          <RoundedButton
                iconRight
                icon="arrow-forward"
                light
                pressed={ () => this.props.navigation.navigate('Perfil') } 
                title="ENTRAR" />
        </Content>
      </Container>
    );
  }
}