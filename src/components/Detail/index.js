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
    Input,
    Header
} from 'native-base';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import cartMiddleware from '../../../store/middleWare/cartMiddleware';

class DetailsScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Details',
    };
    constructor() {
        super();
        this.state = {
            qty: "1"
        }
    }
    _onChange = text => this.setState({ qty: text });
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
                    : itemDetail.length ?
                        <Container>
                            <Content>
                                <Card>
                                    <CardItem>
                                        <Left>
                                            <Body>
                                                <Text>Title : {itemDetail[0].title}</Text>
                                                <Text note>Brand : {itemDetail[0].brand_name}</Text>
                                            </Body>
                                        </Left>
                                    </CardItem>
                                    <CardItem>
                                        <Body>
                                            <View
                                                style={{ width: '100%', borderWidth: 0.5, borderColor: '#999', borderRadius: 3, padding: 5 }}
                                            >
                                                <Image
                                                    source={{ uri: itemDetail[0].img }}
                                                    style={{ height: 200, width: '100%' }}
                                                />
                                            </View >
                                            <View
                                                style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', paddingTop: 5, paddingBottom: 18 }}
                                            >
                                                {itemDetail[0].thumbnail.map(imgUrl =>
                                                    <View style={{ padding: 3, margin: 3, borderWidth: 0.5, borderColor: '#999', borderRadius: 3 }}>
                                                        <Thumbnail square source={{ uri: imgUrl }} />
                                                    </View>
                                                )}
                                            </View>
                                            <Text
                                                style={{ color: '#555', fontWeight: 'bold', fontSize: 20, marginBottom: 5 }}
                                            >About This Product:
                                            </Text>
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
                                                <Input onChangeText={(text) => this._onChange(text)} value={this.state.qty} />
                                            </Item>
                                        </Right>
                                    </CardItem>
                                    <View style={{ flexDirection: "row", flex: 1, justifyContent: 'space-between', padding: 15 }}>
                                        <Button iconLeft info onPress={() => this.props.navigation.navigate('Home')}>
                                            <Icon name="arrow-back" />
                                            <Text>Back</Text>
                                        </Button>
                                        <Button iconRight onPress={() => addToCartDispatch(itemDetail[0].id, this.state.qty)}>
                                            <Text>Add to Cart</Text>
                                            <Icon name="md-cart" />
                                        </Button>
                                    </View>

                                </Card>
                            </Content>
                        </Container>
                        : null
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
    addToCartDispatch: (...data) => dispatch(cartMiddleware.goCart(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen)