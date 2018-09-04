import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Expo from 'expo';

import AppNavigator from './routes/routes';

export default class App extends React.Component {

  state = {
    isLoadingFonts: true
  }

  updateState = (e, d) => this.setState({ [ e ]: d })

  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf")
    });

    this.setState({ isLoadingFonts: false });
  }

  componentWillMount() {
    this.loadFonts();
  }
  
  render() {
    const { isLoadingFonts } = this.state;
    
    if(isLoadingFonts) return <Expo.AppLoading />;
    return <AppNavigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
