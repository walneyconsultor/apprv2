import React, { Component } from 'react';
import styles from './styles/styles';

import Mapview from 'react-native-maps';
import MarkerIcon from  '../assets/img/markerpoint.png';
import MapConfig from './styles/map';


import { View, Image, Button, Text, Left } from 'react-native';

export default class MapsNavigatorColetor extends Component {
    render() {
        return (

            <View style={styles.container}>
                <Mapview
                    customMapStyle={ MapConfig }
                    style={styles.map}
                    region={{ latitude: -1.401701, longitude: -48.452767, latitudeDelta: 0.1, longitudeDelta: 0.1 }}
                    onRegionChange={this.onRegionChange}>
                    
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
                <Button 
                        onPress={ () => this.props.navigation.navigate('Feedback') }
                        title="enviar"
                        style={{
                        position: 'absolute',
                        bottom: '10',
                        marginButton:'20',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}>
                </Button>
            </View>
        );
    }
}
