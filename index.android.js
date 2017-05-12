/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Dimensions,
  Modal,
  Image,
  StatusBar,
  BackHandler,
  View
} from 'react-native';

import { Container, Content, Header, Left, Right, H3, Button, Icon, Body, Title} from 'native-base';

import { 
  PublisherBanner, AdMobBanner
} from 'react-native-admob'


import Card from './Card'

export default class NeverHaveIEver extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drunkometerOpen: false,
      yup: 0
    }
  }

   //                 <Right>
   //                    <Button transparent onPress={() => this.setState({drunkometerOpen: true})}>
   //                          <Icon name='beer' />
   //                      </Button>
   //                  </Right>
                    // <Button transparent light onPress={() => BackHandler.exitApp()} >
                    //   <Icon name='close' />
                    // </Button>
  render() {
    console.log(this.state);
    return (
        <Container>
        <StatusBar hidden={true} />

          <Image 
            source={require('./src/images/bg.png')}
            style={styles.container}>
                <Content>
                  <View style={styles.header}>
                    <H3></H3>
                  </View>
                    <Card />


                </Content>
          </Image>
                    <View style={styles.adv}>
                      <AdMobBanner
                        bannerSize="smartBannerPortrait"
                        adUnitID="ca-app-pub-7178173511438293/1491911168"
                        didFailToReceiveAdWithError={(e) => console.log(e)} 
                      />
                    </View>
                  <View style={styles.closeContainer}>
                  </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
    width: Dimensions.get('window').width,
   
  },
  header: {
    marginTop: 30,
    marginBottom: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  adv: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    bottom: 0, 
    left: 0
  },
  closeContainer: {
    position: 'absolute',
    top: 0,
    right: -10
  }
});

AppRegistry.registerComponent('NeverHaveIEver', () => NeverHaveIEver);
