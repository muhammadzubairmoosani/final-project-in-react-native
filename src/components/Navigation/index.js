import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Icon, View } from 'native-base';
import HomeScreen from '../Home';
import DetailsScreen from '../Detail';
import CartScreen from '../Cart';
import CheckOutScreen from '../CheckOut';
import SignInScreen from '../SignIn';
import SignUpScreen from '../SignUp';

const HomeNavigator = createStackNavigator({
    Home: HomeScreen,
},
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerStyle: {
                    backgroundColor: '#3a9ad3'
                },
                headerTitle: 'Home',
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    textAlign: 'center',
                    flex: 1
                },
                headerLeft: (
                    <Icon
                        name="md-menu"
                        style={{ color: '#fff', marginLeft: 15 }}
                        onPress={() => navigation.openDrawer()}
                    />
                ),
                headerRight: (
                    <View />
                )
            }
        }
    }
)

const DetailsNavigator = createStackNavigator({
    Details: DetailsScreen,
},
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerStyle: {
                    backgroundColor: '#3a9ad3'
                },
                headerTitle: 'Details',
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    textAlign: 'center',
                    flex: 1
                },
                headerLeft: (
                    <Icon
                        name="md-menu"
                        style={{ color: '#fff', marginLeft: 10 }}
                        onPress={() => navigation.openDrawer()}
                    />
                ),
                headerRight: (
                    <View />
                )
            }
        }
    }
)

const CartNavigator = createStackNavigator({
    Cart: CartScreen,
},
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerStyle: {
                    backgroundColor: '#3a9ad3'
                },
                headerTitle: 'Cart',
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    textAlign: 'center',
                    flex: 1
                },
                headerLeft: (
                    <Icon
                        name="md-menu"
                        style={{ color: '#fff', marginLeft: 10 }}
                        onPress={() => navigation.openDrawer()}
                    />
                ),
                headerRight: (
                    <View />
                )
            }
        }
    }
)

const CheckOutNavigator = createStackNavigator({
    CheckOut: CheckOutScreen,
},
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerStyle: {
                    backgroundColor: '#3a9ad3'
                },
                headerTitle: 'Check Out',
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    textAlign: 'center',
                    flex: 1
                },
                headerLeft: (
                    <Icon
                        name="md-menu"
                        style={{ color: '#fff', marginLeft: 10 }}
                        onPress={() => navigation.openDrawer()}
                    />
                ),
                headerRight: (
                    <View />
                )
            }
        }
    }
)

const SignInNavigator = createStackNavigator({
    SignIn: SignInScreen,
},
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerStyle: {
                    backgroundColor: '#3a9ad3'
                },
                headerTitle: 'Sign In',
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    textAlign: 'center',
                    flex: 1
                },
                headerLeft: (
                    <Icon
                        name="md-menu"
                        style={{ color: '#fff', marginLeft: 10 }}
                        onPress={() => navigation.openDrawer()}
                    />
                ),
                headerRight: (
                    <View />
                )
            }
        }
    }
)

const SignUpNavigator = createStackNavigator({
    SignUp: SignUpScreen,
},
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerStyle: {
                    backgroundColor: '#3a9ad3'
                },
                headerTitle: 'Sign Up',
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    textAlign: 'center',
                    flex: 1
                },
                headerLeft: (
                    <Icon
                        name="md-menu"
                        style={{ color: '#fff', marginLeft: 10 }}
                        onPress={() => navigation.openDrawer()}
                    />
                ),
                headerRight: (
                    <View />
                )
            }
        }
    }
)

const DrawerNavigator = createDrawerNavigator({
    Home: HomeNavigator,
    Details: DetailsNavigator,
    Cart: CartNavigator,
    CheckOut: CheckOutNavigator,
    SignIn: SignInNavigator,
    SignUp: SignUpNavigator
});

export default createAppContainer(DrawerNavigator);
