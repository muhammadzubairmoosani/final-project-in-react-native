import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Label, Button, Text, Icon } from 'native-base';
import { Alert } from 'react-native';
import authMiddleware from '../../../store/middleWare/authMiddleware';
import { connect } from 'react-redux';

class SignUpScreen extends Component {
    constructor() {
        super();
        this.state = {
            conPass: '',
            password: '',
            email: ''
        }
    }
    _onChange = (key, text) => this.setState({ [key]: text });

    _onSubmit = () => {
        const { password, conPass, email } = this.state;
        if (password.length && conPass.length && email.length) {
            if (password === conPass) {
                const data = {
                    password,
                    email
                }
                this.props.SignUpDispatch(data)
                this.setState({ password: '', conPass: '', email: '' })
            }
            else {
                this.setState({ password: '', conPass: '' })
                Alert.alert(
                    'Alert',
                    'Password does not match, Please re-enter a password again.',
                    [{ text: 'OK' }],
                    { cancelable: false }
                )
            }
        }
        else {
            Alert.alert(
                'Alert',
                'Please fill up all text fields',
                [{ text: 'OK' }]
            )
        }
    }
    render() {
        this.props.message && Alert.alert(this.props.message)
        return (
            <Container>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Email</Label>
                            <Input
                                onChangeText={(text) => this._onChange('email', text)}
                                value={this.state.email}
                            />
                        </Item>
                        <Item floatingLabel>
                            <Label>Password</Label>
                            <Input
                                secureTextEntry
                                onChangeText={(text) => this._onChange('password', text)}
                                value={this.state.password}
                            />
                        </Item>
                        <Item floatingLabel>
                            <Label>Confirm Password</Label>
                            <Input
                                secureTextEntry
                                onChangeText={(text) => this._onChange('conPass', text)}
                                value={this.state.conPass}
                            />
                        </Item>
                        <Button
                            block
                            style={{ margin: 10, marginTop: 20, marginBottom: 20 }}
                            onPress={() => this._onSubmit()}
                        >
                            <Text>Sign Up</Text>
                        </Button>
                    </Form>
                </Content>
            </Container >
        );
    }
}
const mapStateToProps = state => {
    return {
        message: state.authReducer.message
    }
}

const mapDispatechToProps = dispatch => {
    return {
        SignUpDispatch: data => dispatch(authMiddleware.signUp(data))
    }
}

export default connect(mapStateToProps, mapDispatechToProps)(SignUpScreen);