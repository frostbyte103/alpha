import React, { Component } from 'react';
import { Image, View, WebView } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { AppLoading, Font } from '../utils/expo';
import { tzData } from '../utils';

export class CardImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      loading: true,
      cardInfo: this.props.info.item,
      curTime : Date.now(),
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
    setInterval( () => {
      let d = new Date();
      let tminus = (60 - d.getSeconds) * 1000;
      this.setState({
        curTime : Date.now(),
      })
    },tminus)
  }

  getZip = (address) => {
    addy = address.split(",")
    return addy[addy.length - 2].split(' ')[2]
  }

  getLocalTime = (address, time) => {
    let zip = this.getZip(address);
    let d = new Date(time)
    let offset = (d.getTimezoneOffset() / 60) - tzData[zip];
    let hours = d.getHours() + offset
    let ampm = 'am'
    if(hours >= 24) {
      hours -= 24
    }
    if(hours > 12) {
      ampm = 'pm'
      hours -= 12
    } else if (hours === 12) {
      ampm = 'pm'
    } else if (hours === 0) {
      hours = 12
    }
    return hours + ':' + d.getMinutes() + ampm;
  }

  render() {
    if (this.state.loading) {
      return <AppLoading />;
    }
    return (
          <Card>
            <CardItem>
              <Left>
                <Thumbnail circle source={{uri: 'https://besticon-demo.herokuapp.com/icon?url=' + this.state.cardInfo.Website + '&size=80..120..200'}} />
                <Body>
                  <Text>{this.state.cardInfo.Phone}</Text>
                  <Text note>{this.state.cardInfo.Name}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Body style={{width: null, flex: 1, paddingLeft: 25, paddingRight: 25,}}>
                <View style={{flexDirection: 'row',}}>
                  <Text style={{fontWeight: 'bold'}}>
                    Local Time: 
                  </Text>
                  <Text>{this.getLocalTime(this.state.cardInfo.Address, this.state.curTime)}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontWeight: 'bold'}}>
                    Address: 
                  </Text>
                  <Text>{this.state.cardInfo.Address}</Text>
                </View>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="logo-whatsapp" />
                  <Text>Call</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="paper" />
                  <Text>Objective</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
    );
  }
}