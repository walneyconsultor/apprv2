import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import { RoundedButton } from '../components/components';
export default class FixedLabelExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item fixedLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item fixedLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          <RoundedButton
                iconRight
                icon="arrow-forward"
                light
                pressed={ () => this.props.navigation.navigate('Materials') } 
                title="ENTRAR" />
        </Content>
      </Container>
    );
  }
}