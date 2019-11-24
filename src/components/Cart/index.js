import React from 'react';
import {
    View,
    Text,
    Thumbnail,
    Button,
    Icon,
} from 'native-base';
import { connect } from 'react-redux';

class Cart extends React.Component {
    render() {
        const { item, removeItemDispatch } = this.props;
        let total = 0;
        console.log(item)
        return (
            <View style={{ flex: 1, marginRight: 10, marginLeft: 10 }}>
                {item ? item.map((item, index) => {
                    total += item.qty * item.price;
                    return (
                        <>
                            <View key={item.id} style={{ alignSelf: 'center', marginTop: 10 }}>
                                <Thumbnail large source={{ uri: item.img }} />
                            </View>
                            <View style={{ marginTop: 10 }}>
                                <Text>Title: {item.title}</Text>
                                <Text>Brand: {item.brand_name}</Text>
                                <Text>Price: Rs. {item.price}</Text>
                                <Text>Qty: {item.qty}</Text>
                            </View>
                            <Button
                                style={{ backgroundColor: '#d9534f', marginTop: 15, alignSelf: 'center' }}
                                onPress={() => removeItemDispatch(index)}
                            >
                                <Text>Delete Item</Text>
                            </Button>
                        </>
                    )
                }) :
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Icon name='logo-dropbox' style={{ fontSize: 75, color: '#444' }} />
                        <Text style={{ fontWeight: 'bold', color: '#444' }}>Your Cart is Empty!</Text>
                    </View>
                }
            </View>
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