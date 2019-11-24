import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Icon, View } from 'native-base';
import HomeScreen from '../Home';
import DetailsScreen from '../Detail';
import CartScreen from '../Cart';

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
    Home: CartScreen,
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


const DrawerNavigator = createDrawerNavigator({
    Home: HomeNavigator,
    Details: DetailsNavigator,
    Cart: CartNavigator
});

export default createAppContainer(DrawerNavigator);
