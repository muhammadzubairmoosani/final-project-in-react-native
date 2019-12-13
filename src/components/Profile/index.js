import React, { Component } from "react";
import { Spinner, View, Text, Thumbnail } from "native-base";
import { connect } from 'react-redux';
import productMiddleware from '../../../store/middleWare/productMiddleware';
import authMiddleware from '../../../store/middleWare/authMiddleware';
import { StyleSheet } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native';

class OrderHistoryScreen extends Component {
    state = {
        show: true,
        id: 0
    }
    componentDidMount() {
        this.props.getOrderDispatch(this.props.user.uid)
    }
    render() {
        const { isLoading, orders, user } = this.props;
        const { show, id } = this.state;
        let total = 0;
        return (
            <ScrollView style={styles.container}>
                {isLoading ?
                    <Spinner color='blue' />
                    :
                    <>
                        {orders.length ?
                            orders.map((item, index) => {
                                return <View>
                                    <TouchableOpacity
                                        style={styles.header}
                                        onPress={() => this.setState({ show: true, id: index == id ? null : index })}
                                    >
                                        <View>
                                            <Text>Order Date: {item.date}</Text>
                                        </View>
                                    </TouchableOpacity>
                                    {/* <View style={styles.flex}>
                                                <Text style={[styles.text, { flex: 2 }]}>Image</Text>
                                                <Text style={[styles.text, { flex: 2 }]}>Brand</Text>
                                                <Text style={[styles.text, { flex: 2 }]}>Price</Text>
                                                <Text style={[styles.text, { flex: 1 }]}>Qty</Text>
                                                <Text style={[styles.text, { flex: 2 }]}>total</Text>
                                            </View> */}
                                    {show && id === index &&
                                        item.orderList.map(i => {
                                            total = i.price * i.qty;
                                            return (
                                                <View style={styles.flex}>
                                                    <View style={styles.thumbnail}>
                                                        <Thumbnail small style={{ flex: 2 }} source={{ uri: i.img }} />
                                                    </View>
                                                    <Text style={[styles.text, { flex: 2 }]}>{i.brand_name}</Text>
                                                    <Text style={[styles.text, { flex: 1 }]}>Rs.{i.price}</Text>
                                                    <Text style={[styles.text, { flex: 1 }]}>{i.qty}</Text>
                                                    <Text style={[styles.text, { flex: 1 }]}>Rs.{total}</Text>
                                                </View>
                                            )
                                        })
                                    }
                                </View>
                            })
                            : <Text>No Orders!</Text>
                        }
                    </>
                }
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        marginRight: 8,
        marginLeft: 8,
        marginTop: 15
    },
    header: {
        backgroundColor: '#F8F8F8',
        padding: 15,
        borderBottomColor: '#D8D8D8',
        borderBottomWidth: 1,
        marginBottom: 1
    },
    text: {
        fontSize: 12,
        textAlign: 'center'
    },
    flex: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRightColor: '#D8D8D8',
        borderLeftColor: '#D8D8D8',
        borderRightWidth: 1,
        borderLeftWidth: 1,
        padding: 5,
        paddingTop: 8,
        paddingBottom: 8

    },
    thumbnail: {
        borderWidth: 0.2,
        borderColor: '#999',
        borderRadius: 50,
        padding: 5
    }
})
const mapStateToProps = state => {
    return {
        orders: state.productReducer.orders,
        user: state.authReducer.user,
        isLoading: state.search_form_loadingReducer.dataLoading
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getOrderDispatch: data => dispatch(productMiddleware.getOrder(data)),
        getUserStatusDispatch: () => dispatch(authMiddleware.isStatus()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(OrderHistoryScreen)