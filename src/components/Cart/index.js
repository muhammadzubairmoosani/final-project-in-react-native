import React from 'react';
import {
    View,
    Text,
    Thumbnail,
    Button,
    Icon,
} from 'native-base';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';

class Cart extends React.Component {
    render() {
        const { items, removeItemDispatch } = this.props;
        let total = 0;
        console.log(items)
        return (
            <ScrollView>
                <View style={{ flex: 1, margin: 10 }}>
                    {items ? items.map((item, index) => {
                        total += item.qty * item.price;
                        return (
                            <>
                                <View key={item.id} style={{ alignSelf: 'center', marginTop: 15 }}>
                                    <Thumbnail large source={{ uri: item.img }} />
                                </View>
                                <View style={{ marginTop: 10 }}>
                                    <Text>Title: {item.title}</Text>
                                    <Text>Brand: {item.brand_name}</Text>
                                    <Text>Price: Rs. {item.price}</Text>
                                    <Text>Qty: {item.qty}</Text>
                                </View>
                                <Button
                                    style={{ backgroundColor: '#d9534f', marginTop: 15, marginBottom: 15, alignSelf: 'center' }}
                                    onPress={() => removeItemDispatch(index)}
                                >
                                    <Text>Delete Item</Text>
                                </Button>
                                <View style={{ borderBottomColor: '#CCC', borderBottomWidth: 1, }} />
                            </>
                        )
                    }) :
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Icon name='logo-dropbox' style={{ fontSize: 75, color: '#444' }} />
                            <Text style={{ fontWeight: 'bold', color: '#444' }}>Your Cart is Empty!</Text>
                        </View>
                    }
                </View>
                <View style={{ margin: 10, marginBottom: 20, borderBottomColor: '#CCC', borderBottomWidth: 1, }}>
                    <Text style={{ marginBottom: 2, fontWeight: 'bold' }}>Sub Total : {total}/=</Text>
                    <Text style={{ marginBottom: 2, fontWeight: 'bold' }}>Delivery fee : 200/=</Text>
                    <Text style={{ fontWeight: 'bold' }}>Total : {total + 200}/=</Text>
                </View>
                <Button style={{ alignSelf: 'center', marginLeft: 10, marginRight: 10, marginBottom: 20, fontWeight: 'bold' }}>
                    <Text>Check Out</Text>
                </Button>
            </ScrollView>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.cartReducer.cartItems
    };
};
const mapDispatchToProps = dispatch => {
    return {
        removeItemDispatch: (data) => dispatch(cartMiddleware.removeItem(data)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);