import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class DrawerNavigates extends React.Component {
    render() {
        const { navigation, activeItemKey } = this.props;
        return (
            <View >
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text style={[styles.item, (activeItemKey == "Home") && styles.activeItem]} >Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                    <Text style={[styles.item, (activeItemKey == "Details") && styles.activeItem]}>Detail</Text>
                </TouchableOpacity>
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
