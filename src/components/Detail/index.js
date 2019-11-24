import React from 'react';
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


export default class DetailsScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Details',
        // drawerIcon: ({ tintColor }) => (
        //     <Image
        //         source={require('./download.png')}
        //         style={[styles.icon, { tintColor: tintColor }]}
        //     />
        // ),
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title='Go back home'
                />
            </View>
        );
    }
}
