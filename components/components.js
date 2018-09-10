import React from 'react';
import { Button, Icon } from 'native-base';
import { Text } from 'react-native';

RoundedButton = props =>
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
    RoundedButton
}
