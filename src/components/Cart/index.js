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
import cartMiddleware from '../../../store/middleWare/cartMiddleware';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }
    componentDidMount() {
        this.setState({ items: this.props.items })
    }
    _removeItem = index => {
        let getValue = this.state.items;
        getValue.splice(index, 1);
        this.setState({
            items: getValue
        }, () => this.props.removeItemDispatch(this.state.items));
    };
    render() {
        const { items } = this.state
        let total = 0;
        return (
            <ScrollView>
                <View style={{ flex: 1, margin: 10 }}>
                    {items.length ?
                        <>
                            {items.map((item, index) => {
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
                                onPress={() => this.props.navigation.navigate('CheckOut')}
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
        items: state.cartReducer.array
    };
};
const mapDispatchToProps = dispatch => {
    return {
        removeItemDispatch: data => dispatch(cartMiddleware.removeItem(data))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);