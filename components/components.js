import React from 'react';
import { Button, Icon } from 'native-base';
import { Text } from 'react-native';

RoundedButton = props =>
    <Button { ...props } style={{ marginTop: 10 }} onPress={ props.pressed } rounded success>

        <Text style={{ color: '#FEFEFE' }}>{ props.title }</Text>
        { props.icon !== null ? <Icon name={ props.icon } style={{ marginLeft: 4 }} /> : null }

    </Button>

export {
    RoundedButton
}