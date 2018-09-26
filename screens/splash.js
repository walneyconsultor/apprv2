import React, { Component } from 'react';

import {
  LoginButton, Label, Container
} from '../components/components';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Login extends Component {

  press() {

  }

  render() {
    return (
        <ScrollView style={styles.scroll}>
          <Container>
              <LoginButton
                  label="Forgot Login/Pass"
                  styles={{button: styles.alignRight, label: styles.label}}
                  onPress={ () => this.props.navigation.navigate('SelectProfileRole')} />
          </Container>
          <Container>
              <Label text="Nome de Usuário ou E-mail" />
              <TextInput
                  underlineColorAndroid='transparent'
                  style={styles.textInput}
              />
          </Container>
          <Container>
              <Label text="Senha" />
              <TextInput
                  underlineColorAndroid='transparent'
                  secureTextEntry={true}
                  style={styles.textInput}
              />
          </Container>
          <Container>
            <LoginButton
                styles={{button: styles.transparentButton}}
                onPress={this.press.bind(this)}>
                <View style={styles.inline}>
                    <Icon name="facebook-official" size={20} color="#3B5699" />
                    <Text style={[styles.buttonBlueText, styles.buttonBigText]}>  Connect </Text>
                    <Text style={styles.buttonBlueText}>with Facebook</Text>
                </View>
            </LoginButton>
        </Container>
        <View style={styles.footer}>
            <Container>
                <LoginButton
                    label="LOGIN"
                    styles={{button: styles.primaryButton, label: styles.buttonWhiteText}}
                    onPress={this.press.bind(this)} />
            </Container>
            <Container>
                <LoginButton
                    label="CANCELAR"
                    styles={{label: styles.buttonBlackText}}
                    onPress={this.press.bind(this)} />
            </Container>
        </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scroll: {
     backgroundColor: '#d6f5d6',
     padding: 10,
     flexDirection: 'column'
  },

  label: {
    color: '#0d8898',
    fontSize: 20
  },

  alignRight: {
      alignSelf: 'flex-end'
  },

  textInput: {
    height: 50,
    fontSize: 14,
    padding: 14,
    backgroundColor: '#FFF',
    borderRadius: 25
  },

  transparentButton: {
    marginTop: 20,
    borderColor: '#3B5699',
    borderWidth: 2,
    height: 50,

  },
  buttonBlueText: {
      fontSize: 20,
      color: '#3B5699'
  },
  buttonBigText: {
      fontSize: 20,
      fontWeight: 'bold'
  },
  inline: {
      flexDirection: 'row'
  },
  buttonWhiteText: {
    fontSize: 20,
    color: '#FFF',
  },
  buttonBlackText: {
      fontSize: 15,
      color: '#595856',
      marginBottom: 10
  },
  primaryButton: {
      backgroundColor: '#34A853',
      borderRadius: 35
  },
  footer: {
     marginTop: 40
  }
});
