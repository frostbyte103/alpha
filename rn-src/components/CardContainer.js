import React, { Component } from 'react';
import { Image, View, FlatList, StyleSheet } from 'react-native';
import { Container, Header, Content, Spinner, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Footer, FooterTab } from 'native-base';
import { CardImage } from './CardImage';
var tzData = [];

export class CardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      startTime: Date.now(),
    };
    var hasLoaded: false;
    var hasLoggedTime: false;
  }

  addKeys = (val, key) => ({key: key,  ...val,})

  async componentDidMount() {
    return fetch('https://fsz.mro.mybluehost.me/BuzBiz/AppTestData/lawfirmstest.json')
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            isLoading: false,
            cards: responseJson.map(this.addKeys),
          }, function(){
          });


        })
        .catch((error) =>{
          console.error(error);
        })
  } 

  logCards(cards) {
    console.log(cards);
    return cards;
  }

  render() {
    if(this.state.isLoading){
      return(
        <View>
          <Spinner color='orange' />
        </View>
      )
    } else {
      if (!this.hasLoaded) {
        let elapsedTime = Date.now() - this.state.startTime;
        console.log('json has loaded in ' + elapsedTime + 'ms.');
        this.hasLoaded = true;
      }
    }
    return (
      <Content>
        <FlatList
          data={this.logCards(this.state.cards)}
          renderItem={(theInfo) => <CardImage key={theInfo.key} info={theInfo}/>}
          keyExtractor={(item, index) => item}
        />
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})