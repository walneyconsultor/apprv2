import React, { Component } from 'react';
import styles from './styles/styles';

import Mapview from 'react-native-maps';
import MarkerIcon from  '../assets/img/markerpoint.png';
import MapConfig from './styles/map';

import { StyleSheet, Text, View, Image } from 'react-native';
import { Button, Container, Content, Body} from 'native-base';

export default class MapsNavigatorColetor extends Component {
    render() {
        return (
            <Container>
              <Content>
                <Body>
                  <Button>
                    <Text onpress={ () => this.props.navigation.navigate('Feedback') } title="Dar Pontuação"></Text>
                  </Button>
                </Body>
              </Content>
            <View style={styles.container}>
                <Mapview
                    customMapStyle={ MapConfig }
                    style={styles.map}
                    region={{ latitude: -1.401701, longitude: -48.452767, latitudeDelta: 0.1, longitudeDelta: 0.1 }}>
                    <Mapview.Marker
                        coordinate={{ latitude:-1.401701, longitude: -48.452767 }}
                        title={'minha marcação'}
                        description={'minha descrição'} >
                            <Image
                                style={{ width: 50, height: 50, }}
                                source={ MarkerIcon }
                                onLoad={() => this.forceUpdate()} />
                    </Mapview.Marker>
                </Mapview>
            </View>
            </Container>
        );
    }
}
