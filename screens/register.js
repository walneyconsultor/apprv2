import React, { Component } from 'react';
import { Container,Content, Form, Item, Input, Label } from 'native-base';

import { RoundedButton } from '../components/components';

export default class FloatingLabelExample extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>digite seu email</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Senha de 8 digitos</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>confirme Senha</Label>
              <Input />
            </Item>
          </Form>
          <RoundedButton
                iconRight
                icon="arrow-forward"
                light
                pressed={ () => this.props.navigation.navigate('Materials') } 
                title="CADASTRAR" />
        </Content>
      </Container>
    );
  }
}