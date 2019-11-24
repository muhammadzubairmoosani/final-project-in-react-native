import {
    View,
    Button,
} from 'react-native';
import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import HomeScreen from '../Home';
import DetailsScreen from '../Detail';


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
                    <Button
                        title="Open"
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
        defaultNavigationOptions: ({ navigate }) => {
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
                    <Button
                        title="Open"
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

//                     // <Icon
//                     //   style={{ paddingLeft: 10, color: '#fff' }}
//                     //   onPress={() => navigate.openDrawer()}
//                     //   name='md-menu'
//                     //   size={30} />

const DrawerNavigator = createDrawerNavigator({
    Home: HomeNavigator,
    Details: DetailsNavigator,
});

export default createAppContainer(DrawerNavigator);
