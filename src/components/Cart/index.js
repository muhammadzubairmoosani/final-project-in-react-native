import React from 'react';
import {
    View,
    Text,
    Thumbnail,
    Button,
    Icon,
} from 'native-base';
import { ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import CheckOutScreen from '../CheckOut';

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            cartItems: []
        }
    }
    componentDidUpdate(prevProps) {
        const { cartItems } = this.state;
        const { items } = this.props;
        if (prevProps.items !== items) {
            cartItems.push(items);
            this.setState({ cartItems: cartItems })
        }
    }
    _removeItem = index => {
        let getValue = this.state.cartItems;
        getValue.splice(index, 1);
        this.setState({ cartItems: getValue });
    };
    render() {
        const { cartItems } = this.state;
        let total = 0;
        return (
            <ScrollView>
                <View style={{ flex: 1, margin: 10 }}>
                    {cartItems.length ?
                        <>
                            {cartItems.map((item, index) => {
                                total += item.qty * item.price;
                                return (
                                    <View key={item.id}>
                                        <View style={{ alignSelf: 'center', marginTop: 15, borderWidth: 0.5, borderColor: '#999', borderRadius: 50, padding: 5 }}>
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
                                            onPress={() => this._removeItem(index)}
                                        >
                                            <Text>Remove Item</Text>
                                            <Icon name='md-trash' />
                                        </Button>
                                        <View style={{ borderBottomColor: '#CCC', borderBottomWidth: 1, }} />
                                    </View>
                                )
                            })}
                            <View style={{ margin: 10, borderBottomColor: '#CCC', borderBottomWidth: 1, }}>
                                <Text style={styles.price}>Sub Total : {total}/=</Text>
                                <Text style={styles.price}>Delivery fee : 200/=</Text>
                                <Text style={{ fontWeight: 'bold', marginLeft: 5 }}>Total : {total + 200}/=</Text>
                            </View>
                            <Button
                                style={styles.btn}
                                onPress={() => this.props.navigation.navigate(CheckOutScreen)}
                            >
                                <Text>Check Out</Text>
                            </Button>
                        </>
                        :
                        <View style={{ alignItems: 'center', marginTop: 50 }}>
                            <Icon name='logo-dropbox' style={{ fontSize: 75, color: '#444' }} />
                            <Text style={{ fontWeight: 'bold', color: '#444' }}>Your Cart is Empty!</Text>
                        </View>
                    }
                </View>
            </ScrollView>
        );
    }
}
let styles = StyleSheet.create({
    btn: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        margin: 10,
        marginBottom: 20,
    },
    price: {
        marginBottom: 2,
        fontWeight: 'bold',
        marginLeft: 5
    }
})
const mapStateToProps = state => {
    return {
        items: state.cartReducer.cartItems
    };
};
export default connect(mapStateToProps)(Cart);