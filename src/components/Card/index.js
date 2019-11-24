import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Button } from 'native-base';
const cards = [
    {
        text: 'Card One',
        name: 'One',
        image: require('./download.png'),
    },
];
export default class DeckSwiperAdvancedExample extends Component {
    render() {
        return (
            <Container>
                {/* <Header /> */}
                <View>
                    <DeckSwiper
                        ref={(c) => this._deckSwiper = c}
                        dataSource={cards}
                        renderEmpty={() =>
                            <View style={{ alignSelf: "center" }}>
                                <Text>Over</Text>
                            </View>
                        }
                        renderItem={item =>
                            <Card style={{ elevation: 3 }}>
                                <CardItem>
                                    <Left>
                                        <Thumbnail source={item.image} />
                                        <Body>
                                            <Text>{item.text}</Text>
                                            <Text note>NativeBase</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem cardBody>
                                    <Image style={{ height: 300, flex: 1 }} source={item.image} />
                                </CardItem>
                                <CardItem>
                                    <Icon name="heart" style={{ color: '#ED4A6A' }} />
                                    <Text>{item.name}</Text>
                                </CardItem>
                            </Card>
                        }
                    />
                </View>
                <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 0, left: 0, right: 0, justifyContent: 'space-between', padding: 15 }}>
                    <Button iconLeft onPress={() => this._deckSwiper._root.swipeLeft()}>
                        <Icon name="arrow-back" />
                        <Text>Swipe Left</Text>
                    </Button>
                    <Button iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
                        <Text>Swipe Right</Text>
                        <Icon name="arrow-forward" />
                    </Button>
                </View>
            </Container>
        );
    }
}