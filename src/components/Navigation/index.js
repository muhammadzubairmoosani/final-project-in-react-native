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
import ProfileScreen from '../Profile';
import DrawerNavigates from './drawerNavigates';

const mainNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                headerTitle: 'Home'
            },
        },
        Details: {
            screen: DetailsScreen,
            navigationOptions: {
                headerTitle: 'Product Details'
            },
        },

        Cart: {
            screen: CartScreen,
            navigationOptions: {
                headerTitle: 'Cart'
            }
        },
        CheckOut: {
            screen: CheckOutScreen,
            navigationOptions: {
                headerTitle: 'Check Out'
            },
        },
        SignIn: {
            screen: SignInScreen,
            navigationOptions: {
                headerTitle: 'Sign In'
            },
        },
        SignUp: {
            screen: SignUpScreen,
            navigationOptions: {
                headerTitle: 'Sign Up'
            },
        },
        Profile: {
            screen: ProfileScreen,
            navigationOptions: {
                headerTitle: 'Profile'
            },
        },
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerStyle: {
                    backgroundColor: '#3a9ad3'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    textAlign: 'center',
                    flex: 1
                },
                headerLeft: (
                    <Icon
                        name="md-menu"
                        style={{ color: '#fff', marginLeft: 18 }}
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
const AppRoutes = createDrawerNavigator(
    { mainNavigator },
    { contentComponent: DrawerNavigates }
);
export default createAppContainer(AppRoutes);