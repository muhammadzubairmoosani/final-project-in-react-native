import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import authMiddleware from '../../../store/middleWare/authMiddleware';

class DrawerNavigates extends React.Component {
    componentDidMount() {
        this.props.isStatusDispatch()
    }
    render() {
        const { navigation, activeItemKey, authReducer, signOutDispatch } = this.props;
        // const { routeName } = this.props.navigation.state.routes[0].routes[1].routeName
        // let routeName = navigation.state.routes[0].routes[1].routeName
        if (navigation.state.routes[0].routes[1]) {
            // let routeName = navigation.state.routes[0].routes[1].routeName;
            // console.log('=======', routeName)
            navigation.state.routes[0].routes.map(item => console.log(item.routeName))
        }
        // console.log('=======', routeName)
        return (
            <View >
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    {/* <Text style={[styles.item, (activeItemKey == "Home") && styles.activeItem]} >Home</Text> */}
                    <Text style={[styles.item, (navigation.state.routes[0].index === 'id-1575478157454-0') && styles.activeItem]} >Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                    <Text style={[styles.item, (navigation.state.routes[0].index === 1) && styles.activeItem]}>Cart</Text>
                </TouchableOpacity>
                {authReducer.user ?
                    <>
                        <TouchableOpacity onPress={() => signOutDispatch()}>
                            <Text style={styles.item}>Sign Out</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                            <Text style={[styles.item, (activeItemKey == "Profile") && styles.activeItem]}>Profile</Text>
                        </TouchableOpacity>
                    </>
                    :
                    <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                        <Text style={[styles.item, (navigation.state.routes[0].index === 2) && styles.activeItem]}>Sign In</Text>
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

