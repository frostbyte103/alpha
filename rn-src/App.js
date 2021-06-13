import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { CardContainer } from './components/CardContainer.js';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Footer, FooterTab } from 'native-base';
import { Constants } from './utils/expo';

const tabs = [ 'callList', 'companyList', 'placeholder1', 'placeholder2' ]

const MainView = (props) => {
    switch(props.activeTab) {
      case 1:
        return <Text>{tabs[1]}</Text>
      case 2:
        return <Text>{tabs[2]}</Text>
      case 3:
        return <Text>{tabs[3]}</Text>
      default:
        return <CardContainer style={styles.cardImage}/>
    }   
  }

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: 0,

    }
  }

  setActiveTab(tab) {
    this.setState({activeTab: tab})
  }

  render() {
    return (
      <View style={styles.container}>
        <Container style= {{flex: 1}}>
          <Header style={{backgroundColor: '#222222'}}>
            <Left>
              <Button transparent>
                <Icon name='menu' />
              </Button>
            </Left>
            <Body/>
            <Right/>
          </Header>
          <Content>
            <MainView activeTab={this.state.activeTab}/>
          </Content>
          <Footer>
            <FooterTab>
              <Button onPress={()=>{this.setActiveTab(0)}}>
                <Icon active name="apps"/>
              </Button>
              <Button onPress={()=>{this.setActiveTab(1)}}>
                <Icon name="chatbubbles"/>
              </Button>
              <Button onPress={()=>{this.setActiveTab(2)}}>
                <Icon name="navigate"/>
              </Button>
              <Button onPress={()=>{this.setActiveTab(3)}}>
                <Icon name="person"/>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardImage: {
    width: '100%',
  },
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#222',
    paddingTop: Constants.statusBarHeight,
  },
});
