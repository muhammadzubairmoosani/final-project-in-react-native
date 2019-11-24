import React from 'react';
import { connect } from 'react-redux';
import productMiddleware from '../../../store/middleWare/productMiddleware';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    Image
} from 'react-native';
import DeckSwiperAdvancedExample from '../Card';
class HomeScreen extends React.Component {
    componentDidMount() {
        this.props.getProductDispatch();
    }

    static navigationOptions = {
        drawerLabel: 'Home',
        // drawerIcon: ({ tintColor }) => (
        //     <Image
        //         source={require('./download.png')}
        //         style={[styles.icon, { tintColor: tintColor }]}
        //     />
        // ),
    };
    aa() {
        this.props.navigation.closeDrawer()
    }

    render() {
        return <DeckSwiperAdvancedExample />
        // console.warn(this.props.productList)
        // return (
        //     <View>
        //         <Text>Home page</Text>
        //     </View>
        // );
    }
};

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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)