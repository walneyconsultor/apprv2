import React from 'react';
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native';
import { Button } from 'native-base';

const Container = (props) => {
    return (
        <View style={{ marginBottom: 20 }}>
            { props.children }
        </View>
    );
}


const LoginButton = (props) => {

    function getContent(){
        if(props.children){
            return props.children;
        }
        return <Text style={props.styles.label}>{props.label}</Text>
    }

    return (
        <TouchableHighlight
            underlayColor="#ccc"
            onPress={props.onPress}
            style={[
                props.noDefaultStyles ? '' : {
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 20
                },
                props.styles ? props.styles.button : '']}
        >
            { getContent() }
        </TouchableHighlight>
    );
}

const Label = (props) => {
    return (
        <Text
            style={props.styles && props.styles.textLabel ? props.styles.textLabel : {
              fontSize: 20,
              fontWeight: 'bold',
              fontFamily: 'Verdana',
              marginBottom: 10,
              color: '#595856'
            }}
        >
            {props.text}
        </Text>
    );
}

const RoundedButton = props =>
    <Button { ...props }
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10,
        minWidth: 250,
        display: 'flex',
        justifyContent: 'center' }}

        onPress={ props.pressed } rounded success>

        <Text style={{ color: '#FEFEFE' }}>{ props.title }</Text>

    </Button>

export {
    Container,
    LoginButton,
    Label,
    RoundedButton
}
