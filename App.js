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
  BackHandler,
  View
} from 'react-native';

import { Container, Content, Header, Left, Right, H3, Button, Icon, Body, Title} from 'native-base';

import { 
  PublisherBanner, AdMobBanner
} from 'react-native-admob'


import Card from './Card'

export default class NeverHaveIEver extends Component {
  render() {
    return (
        <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => BackHandler.exitApp()}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Drinking Game</Title>
                    </Body>
                    <Right>
                      <Button transparent onPress={() => BackHandler.exitApp()}>
                            <Icon name='beer' />
                        </Button>
                    </Right>
                </Header>
          <View style={styles.container}>
                <Content>
                  <View style={styles.header}>
                    <H3>Never have I ever...</H3>
                  </View>
                    <App />


                </Content>
          </View>
                    <View style={styles.adv}>
                      <AdMobBanner
                        bannerSize="smartBannerPortrait"
                        adUnitID="ca-app-pub-7178173511438293/6831937563"
                        didFailToReceiveAdWithError={(e) => console.log(e)} 
                      />
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
  },
  header: {
    marginTop: 30,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  adv: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    bottom: 0, 
    left: 0
  }
});

