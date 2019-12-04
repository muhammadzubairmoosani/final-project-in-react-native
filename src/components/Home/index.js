import React from 'react';
import { connect } from 'react-redux';
import productMiddleware from '../../../store/middleWare/productMiddleware';
import {
    Spinner,
    Container,
    View,
    DeckSwiper,
    Card,
    CardItem,
    Thumbnail,
    Text,
    Left,
    Body,
    Icon,
    Button
} from 'native-base';
import { Image, TouchableOpacity } from 'react-native';
import DetailsScreen from '../Detail';

class HomeScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home'
    };
    componentDidMount() {
        this.props.getProductDispatch();
    }

    viewItemDetail(id) {
        this.props.viewDetailDispatch(id)
        this.props.navigation.navigate('Details')
        // this.props.navigation.goBack('CheckOut')
    }
    render() {
        const { isLoading, productList } = this.props;
        return (
            <>
                {isLoading ?
                    <Spinner color='blue' />
                    :
                    <Container>
                        <View>
                            <DeckSwiper
                                ref={(c) => this._deckSwiper = c}
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
                                                <TouchableOpacity onPress={() => this.viewItemDetail(item.id)}>
                                                    <Thumbnail source={{ uri: item.thumbnail ? item.thumbnail[0] : item.img }} />
                                                </TouchableOpacity>
                                                <Body>
                                                    <TouchableOpacity onPress={() => this.viewItemDetail(item.id)}>
                                                        <Text>{item.title}</Text>
                                                        <Text note>{item.brand_name}</Text>
                                                    </TouchableOpacity>
                                                </Body>
                                            </Left>
                                        </CardItem>
                                        <TouchableOpacity onPress={() => this.viewItemDetail(item.id)}>
                                            <CardItem cardBody>
                                                <Image style={{ height: 300, flex: 1 }} source={{ uri: item.img }} />
                                            </CardItem>
                                        </TouchableOpacity>
                                    </Card>
                                }
                            />
                        </View>
                        <View
                            style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 10, left: 0, right: 0, justifyContent: 'space-between', padding: 15 }}
                        >
                            <Button iconLeft onPress={() => this._deckSwiper._root.swipeLeft()}>
                                <Icon name="arrow-back" />
                                <Text>Left</Text>
                            </Button>
                            <Button iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
                                <Text>Right</Text>
                                <Icon name="arrow-forward" />
                            </Button>
                        </View>
                    </Container>
                }
            </>
        )
    }
};

const mapStateToProps = state => {
    return {
        productList: state.productReducer.ProductList,
        // searchKey: state.search_form_loadingReducer.searchKey,
        isLoading: state.search_form_loadingReducer.dataLoading
    }
}

const mapDispatchToProps = dispatch => ({
    getProductDispatch: () => dispatch(productMiddleware.getAllProducts()),
    viewDetailDispatch: id => dispatch(productMiddleware.viewProductDetail(Number(id)))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)