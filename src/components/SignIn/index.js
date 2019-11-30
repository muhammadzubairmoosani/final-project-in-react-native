import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import { connect } from 'react-redux';
import authMiddleware from '../../../store/middleWare/authMiddleware';
class SignInScreen extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }
    _onChange = (key, text) => this.setState({ [key]: text });
    _onSubmit = () => {
        const { authReducer, signInDispatch, navigation } = this.props;
        signInDispatch(this.state);
        if (authReducer.user) {
            navigation.navigate('CheckOut')
        }
    };
    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Email</Label>
                            <Input onChangeText={(text) => this._onChange('email', text)} />
                        </Item>
                        <Item floatingLabel>
                            <Label>Password</Label>
                            <Input
                                secureTextEntry
                                onChangeText={(text) => this._onChange('password', text)}
                            />
                        </Item>
                        <Button
                            block
                            style={{ margin: 10, marginTop: 20, marginBottom: 20 }}
                            onPress={() => this._onSubmit()}
                        >
                            <Text>Sign in</Text>
                        </Button>
                        <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#0275d8' }}
                        >or
                        </Text>
                        <Button
                            block
                            info
                            style={{ margin: 10, marginTop: 20, marginBottom: 20 }}
                            onPress={() => this.props.navigation.navigate('SignUp')}
                        >
                            <Text>Sign up</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}
const mapStateToProps = state => {
    return {
        authReducer: state.authReducer
    }
}
const mapDispatechToProps = dispatch => {
    return {
        signInDispatch: data => dispatch(authMiddleware.signIn(data))
    }
}
export default connect(mapStateToProps, mapDispatechToProps)(SignInScreen);