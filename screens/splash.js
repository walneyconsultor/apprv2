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
                  onPress={ () => this.props.navigation.navigate('Account')} />
          </Container>
          <Container>
              <Label text="Username or Email" />
              <TextInput
                  underlineColorAndroid='transparent'
                  style={styles.textInput}
              />
          </Container>
          <Container>
              <Label text="Password" />
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
                    <Icon name="facebook-official" size={30} color="#3B5699" />
                    <Text style={[styles.buttonBlueText, styles.buttonBigText]}>  Connect </Text>
                    <Text style={styles.buttonBlueText}>with Facebook</Text>
                </View>
            </LoginButton>
        </Container>
        <View style={styles.footer}>
            <Container>
                <LoginButton
                    label="Sign In"
                    styles={{button: styles.primaryButton, label: styles.buttonWhiteText}}
                    onPress={this.press.bind(this)} />
            </Container>
            <Container>
                <LoginButton
                    label="CANCEL"
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
     backgroundColor: '#E1D7D8',
     padding: 30,
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
    marginTop: 30,
    borderColor: '#3B5699',
    borderWidth: 2,
    height: 50
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
      marginBottom: 15
  },
  primaryButton: {
      backgroundColor: '#34A853'
  },
  footer: {
     marginTop: 100
  }
});

// import React, { Component } from 'react';
//
// import {TouchableOpacity} from 'react-native';
//
// import Logo from  '../assets/img/logo3.png';
//
// import {
//     Container,
//     Content,
//     Thumbnail,
//     Body
//
// } from 'native-base'
//
// import styles from './styles/styles.js';
//
// import { RoundedButton } from '../components/components';
//
// class Splash extends Component {
//
//     render() {
//         return (
//
//             <Container
//               style={ styles.bgLightGreen }>
//                 <Content
//                   contentContainerStyle={{
//                     flex: 2,
//                     marginTop: 30
//                   }}>
//                   <Body>
//                 <TouchableOpacity
//                     onPress={ () => this.props.navigation.navigate('InfoRecycle') }>
//                 <Thumbnail style={{
//                   width: 200,
//                   height: 190,
//                   marginTop: 10,
//                   marginBottom: 10,
//                 }} square large source={ Logo } />
//                 </TouchableOpacity>
//                 </Body>
//                 </Content>
//                 <Content contentContainerStyle={{
//                   marginTop: 30,
//                   justifyContent: 'flex-start',
//                   display: 'flex',
//                   flex: 1,
//                   flexDirection: 'column'}}>
//                     <RoundedButton pressed={ () => this.props.navigation.navigate('SelectProfileRole') } title="FAÇA LOGIN"/>
//                     <RoundedButton pressed={ () => this.props.navigation.navigate('Register') } title="OU CRIE A SUA CONTA"/>
//                 </Content>
//             </Container>
//         )
//     }
//
// }
//
//
// export default Splash;
