import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Button } from 'native-base';
import { connect } from 'react-redux';

// const cards = [
//     {
//         text: 'Card One',
//         name: 'One',
//         image: require('./download.png'),
//     },
// ];

class DeckSwiperAdvancedExample extends Component {
    render() {
        const { productList } = this.props;
        console.log(productList.length)
        return (
            <Container>
                <View>
                    <DeckSwiper
                        ref={(c) => this._deckSwiper = c}
                        // dataSource={cards}
                        dataSource={productList}
                        renderEmpty={() =>
                            <View style={{ alignSelf: "center" }}>
                                <Text>Over</Text>
                            </View>
                        }
                        renderItem={item =>
                            <Card style={{ elevation: 3 }}>
                                <CardItem>
                                    <Left>
                                        <Thumbnail source={{ uri: item.img }} />
                                        <Body>
                                            <Text>{item.title}</Text>
                                            <Text note>{item.brand_name}</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem cardBody>
                                    <Image style={{ height: 300, flex: 1 }} source={{ uri: item.img }} />
                                </CardItem>
                            </Card>
                        }
                    />
                </View>
                <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 10, left: 0, right: 0, justifyContent: 'space-between', padding: 15 }}>
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

const mapStateToProps = state => {
    // console.log(state.productReducer)
    return {
        productList: state.productReducer.ProductList,
        // searchKey: state.search_form_loadingReducer.searchKey,
        // isLoading: state.search_form_loadingReducer.dataLoading
    }
}

const mapDispatchToProps = dispatch => ({
    // addToCartDispatch: id => dispatch(cartMiddleware.goCart(Number(id))),
    getProductDispatch: () => dispatch(productMiddleware.getAllProducts()),
    // viewDetailDispatch: id => dispatch(productMiddleware.viewProductDetail(Number(id)))
})

export default connect(mapStateToProps, mapDispatchToProps)(DeckSwiperAdvancedExample)