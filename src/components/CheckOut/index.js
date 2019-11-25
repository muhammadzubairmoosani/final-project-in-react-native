import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import { connect } from 'react-redux';
import cartMiddleWare from '../../../store/middleWare/cartMiddleware';
import authMiddleware from '../../../store/middleWare/authMiddleware';
import { Alert } from 'react-native';

class CheckOutScreen extends Component {
    constructor() {
        super();
        this.state = {
            city: '',
            fullName: '',
            email: '',
            phone: '',
            address: '',
            country: '',
            province: ''
        }
    }
    _onChange = (key, text) => this.setState({ [key]: text })

    _onSubmit() {
        this.props.userStatusDispatch();
        setTimeout(() => {
            if (this.props.user) {
                checkOutDispatch(this.state)
                this.setState({
                    city: '',
                    fname: '',
                    lname: '',
                    email: '',
                    phone: '',
                    company: '',
                    address: '',
                    country: ''
                })
            }
            else {
                Alert.alert(
                    'Alert',
                    'Please Sign-in First Before Proceed to Order',
                    [
                        {
                            text: 'Cancel',
                            // onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel',
                        },
                        { text: 'OK', onPress: () => this.props.navigation.navigate('SignIn') },
                    ],
                    { cancelable: false },
                );
            }
        }, 100)
    }

    render() {
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
                            <Input onChangeText={(text) => this._onChange('phone', text)} />
                        </Item>
                        <Item floatingLabel last>
                            <Label>City</Label>
                            <Input onChangeText={(text) => this._onChange('City', text)} />
                        </Item>
                        <Item floatingLabel last>
                            <Label>City</Label>
                            <Input onChangeText={(text) => this._onChange('Country', text)} />
                        </Item>
                        <Item floatingLabel last>
                            <Label>State/Province</Label>
                            <Input onChangeText={(text) => this._onChange('province', text)} />
                        </Item>
                        <Button 
                        success 
                        block onPress={() => this._onSubmit()} 
                        style={{margin:10, marginTop:20, marginBottom:20}}
                        >
                            <Text>Proceed To Order</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.authReducer.user
    }
}
function mapDispatchToProps(dispatch) {
    return {
        checkOutDispatch: data => dispatch(cartMiddleWare.checkOut(data)),
        userStatusDispatch: () => dispatch(authMiddleware.isStatus())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckOutScreen);