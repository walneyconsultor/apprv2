import React, { Component,  } from 'react';

import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';

import { RoundedButton } from '../components/components';

export default class FormCadastroColetor extends Component {
  
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Nome do coletor</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Senha</Label>
              <Input />
            </Item>
          </Form>
          <RoundedButton
                iconRight
                icon="arrow-forward"
                light
                pressed={ () => this.props.navigation.navigate('PerfilColetor') } 
                title="ENTRAR" />
        </Content>
      </Container>
    );
  }
}