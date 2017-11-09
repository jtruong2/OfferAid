import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import APIKEY from '../../../secret/googleNews'

export default class NewsCard extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     articles: null
  //   }
  // }
  //
  // componentDidMount(){
  //   fetch(`https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=${APIKEY}`)
  //   .then((response) => response.json()).then((responseJson) => {
  //     this.setState({
  //       articles: responseJson.articles
  //     })
  //   })
  // }
  render() {
    return (
      <View style={{flex: 1}}>
        <Container>
          <Content>
            <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  <Body>
                    <Text style={{fontWeight: 'bold'}}>Six weeks after Hurricane Maria, Puerto Ricans still waiting for help from Fema</Text>
                    <Text note>November 9, 2017</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={require('../../images/newscardimage1.jpg')} style={{height: 200, width: 200, flex: 1}}/>
                  <Text>
                  Federal agency still hobbled by lack of electricity and reliable cell and internet service – stopping Puerto Ricans from getting the help they desperately need
                  </Text>
                </Body>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent textStyle={{color: '#87838B'}}>
                    <Icon name="logo-twitter" />
                    <Text>1,926 stars</Text>
                  </Button>
                </Left>
              </CardItem>
            </Card>
          </Content>
        </Container>

        <Container>
          <Content>
            <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  <Body>
                    <Text style={{fontWeight: 'bold'}}>Typhoon Damrey kills at least 27 along Vietnams south-central coast</Text>
                    <Text note>November 5, 2017</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={require('../../images/newscardimage2.jpg')} style={{height: 200, width: 200, flex: 1}}/>
                  <Text>
                    Powerful typhoon battering Vietnam also leaves 22 people missing amid extensive damage
                  </Text>
                </Body>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent textStyle={{color: '#87838B'}}>
                    <Icon name="logo-twitter" />
                    <Text>1,200 stars</Text>
                  </Button>
                </Left>
              </CardItem>
            </Card>
          </Content>
        </Container>

        <Container>
          <Content>
            <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  <Body>
                    <Text style={{fontWeight: 'bold'}}>The COP23 climate change summit in Bonn and why it matters</Text>
                    <Text note>November 9, 2017</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={require('../../images/newscardimage3.jpg')} style={{height: 200, width: 200, flex: 1}}/>
                  <Text>
                    Halting dangerous global warming means putting the landmark Paris agreement into practice – without the US – and tackling the divisive issue of compensation
                  </Text>
                </Body>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent textStyle={{color: '#87838B'}}>
                    <Icon name="logo-twitter" />
                    <Text>800 stars</Text>
                  </Button>
                </Left>
              </CardItem>
            </Card>
          </Content>
        </Container>
      </View>
    );
  }
}


 module.exports = NewsCard
