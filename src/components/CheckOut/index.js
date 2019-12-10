import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import { connect } from 'react-redux';
import cartMiddleWare from '../../../store/middleWare/cartMiddleware';
import authMiddleware from '../../../store/middleWare/authMiddleware';
import { Alert } from 'react-native';

class CheckOutScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            email: '',
            phone: '',
            userId: this.props.user && this.props.user.uid,
            country: '',
            address: '',
            province: '',
            fullName: '',
        }
    }
    _onChange = (key, text) => this.setState({ [key]: text })
    _onSubmit() {
        const { userStatusDispatch, user, checkOutDispatch } = this.props;
        const { city, fullName, email, phone, province, address, country } = this.state;
        userStatusDispatch();
        // if (city && fullName && email && phone && province && address && country) {
        if (user) {
            checkOutDispatch(this.state)
            console.log(this.state)
            this.setState({
                city: '',
                email: '',
                phone: '',
                country: '',
                address: '',
                province: '',
                fullName: ''
            })
        }
        else {
            Alert.alert(
                'Alert',
                'Please Sign-in First Before Proceed to Order',
                [
                    { text: 'Cancel', style: 'cancel' },
                    { text: 'OK', onPress: () => this.props.navigation.navigate('SignIn') },
                ],
                { cancelable: false },
            );
        }
    }
    //     else {
    //         Alert.alert(
    //             'Alert',
    //             'Please Fill out all fields required.',
    //             [{ text: 'OK' }]
    //         )
    //     }
    // }
    render() {
        console.log(this.props.user && this.props.user.uid)
        // console.log('hlkasdjfklajsdf')
        return (
            <Container>
                <Content>
                    <Form>
                        <Item floatingLabel last>
                            <Label>Full Name</Label>
                            <Input onChangeText={(text) => this._onChange('fullName', text)} />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Email</Label>
                            <Input onChangeText={(text) => this._onChange('email', text)} />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Address</Label>
                            <Input onChangeText={(text) => this._onChange('address', text)} />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Telephone</Label>
                            <Input onChangeText={(text) => this._onChange('phone', text)} keyboardType='numeric' />
                        </Item>
                        <Item floatingLabel last>
                            <Label>City</Label>
                            <Input onChangeText={(text) => this._onChange('city', text)} />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Country</Label>
                            <Input onChangeText={(text) => this._onChange('country', text)} />
                        </Item>
                        <Item floatingLabel last>
                            <Label>State/Province</Label>
                            <Input onChangeText={(text) => this._onChange('province', text)} />
                        </Item>
                        <Button
                            success
                            block onPress={() => this._onSubmit()}
                            style={{ margin: 10, marginTop: 20, marginBottom: 20 }}
                        >
                            <Text>Proceed To Order</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}
const mapStateToProps = state => {
    return {
        user: state.authReducer.user,
        message: state.cartReducer
    }
}
const mapDispatchToProps = dispatch => {
    return {
        checkOutDispatch: data => dispatch(cartMiddleWare.checkOut(data)),
        // checkOutDispatch: data => console.log(data),
        userStatusDispatch: () => dispatch(authMiddleware.isStatus())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CheckOutScreen);