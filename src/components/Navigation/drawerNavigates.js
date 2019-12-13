import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import authMiddleware from '../../../store/middleWare/authMiddleware';

class DrawerNavigates extends React.Component {
    componentDidMount() {
        this.props.isStatusDispatch()
    }
    _signOut() {
        const { signOutDispatch, authReducer, navigation } = this.props;
        signOutDispatch()
        setTimeout(() => {
            if (authReducer.user) {
                navigation.navigate('home')
            }
        }, 2000);
    }
    _onClick(route) {
        this.props.navigation.closeDrawer();
        this.props.navigation.navigate(route);
    }
    render() {
        const { navigation, authReducer } = this.props;
        let routeName = [];
        let boolean = [];
        if (navigation.state.routes[0].routes[1]) {
            routeName = navigation.state.routes[0].routes;
            boolean = navigation.state.routes[0].isTransitioning
        }
        return (
            <View >
                <TouchableOpacity onPress={() => this._onClick('home')}>
                    <Text style={[styles.item, boolean && styles.activeItem]} >Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._onClick('cart')}>
                    <Text style={[
                        styles.item,
                        (routeName.length && routeName[routeName.length - 1].routeName === 'cart') && styles.activeItem
                    ]}>Cart</Text>
                </TouchableOpacity>
                {authReducer.user ?
                    <>
                        <TouchableOpacity onPress={() => this._signOut()}>
                            <Text style={styles.item}>Sign Out</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this._onClick('orderHistory')}>
                            <Text style={[
                                styles.item,
                                (routeName.length && routeName[routeName.length - 1].routeName == "orderHistory") && styles.activeItem
                            ]}>Order History</Text>
                        </TouchableOpacity>
                    </>
                    :
                    <TouchableOpacity onPress={() => this._onClick('signIn')}>
                        <Text style={[
                            styles.item,
                            (routeName.length && routeName[routeName.length - 1].routeName === 'signIn') && styles.activeItem
                        ]}>Sign In</Text>
                    </TouchableOpacity>
                }
            </View>
        )
    }
}
const styles = StyleSheet.create({
    item: {
        fontWeight: 'bold',
        paddingLeft: 25,
        paddingTop: 15,
        paddingBottom: 15,
        fontSize: 13,
        width: '100%',
    },
    activeItem: {
        color: 'white',
        backgroundColor: '#3a9ad3'
    }
})
const mapStateToProps = state => {
    return {
        authReducer: state.authReducer
    }
}
const mapDispatchToProps = dispatch => {
    return {
        signOutDispatch: () => dispatch(authMiddleware.signOut()),
        isStatusDispatch: () => dispatch(authMiddleware.isStatus())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DrawerNavigates)

