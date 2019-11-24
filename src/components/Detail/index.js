import React from 'react';
import {
    Container,
    Spinner,
    Content,
    Card,
    CardItem,
    Thumbnail,
    Text,
    Button,
    Icon,
    Left,
    Body,
    View,
    Right,
    Item,
    Label,
    Input
} from 'native-base';
import { Image } from 'react-native';
import { connect } from 'react-redux';

class DetailsScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Details',
    };
    render() {
        const {
            addToCartDispatch,
            itemDetail,
            isLoading
        } = this.props;
        return (
            <>
                {isLoading ?
                    <Spinner color='blue' />
                    :
                    <Container>
                        <Content>
                            <Card style={{ flex: 0 }}>
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>{itemDetail[0].title}</Text>
                                            <Text note>{itemDetail[0].brand_name}</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem>
                                    <Body>
                                        <Image source={{ uri: itemDetail[0].img }} style={{ height: 200, width: 200, flex: 1 }} />
                                        <Text>{itemDetail[0].product_detail}</Text>
                                    </Body>
                                </CardItem>
                                <CardItem>
                                    <Left>
                                        <Button transparent textStyle={{ color: '#87838B' }}>
                                            <Icon name="md-cash" />
                                            <Text>Rs. {itemDetail[0].price}</Text>
                                        </Button>
                                    </Left>
                                    <Right>
                                        <Item floatingLabel>
                                            <Label>Quantity</Label>
                                            <Input />
                                        </Item>
                                    </Right>
                                </CardItem>
                                <View style={{ flexDirection: "row", flex: 1, justifyContent: 'space-between', padding: 15 }}>
                                    <Button iconLeft onPress={() => this.props.navigation.navigate('Home')}>
                                        <Icon name="arrow-back" />
                                        <Text>Back</Text>
                                    </Button>
                                    <Button iconRight onPress={() => this.props.navigation.navigate('Home')}>
                                        <Text>Add to Cart</Text>
                                        <Icon name="md-cart" />
                                    </Button>
                                </View>

                            </Card>
                        </Content>
                    </Container>
                }
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        itemDetail: state.productReducer.viewDetailItem,
        isLoading: state.search_form_loadingReducer.dataLoading
    }
}

const mapDispatchToProps = dispatch => ({
    // addToCartDispatch: id => dispatch(cartMiddleware.goCart(Number(id))),
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen)