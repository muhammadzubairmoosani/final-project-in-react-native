import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Label, Button, Text, Icon } from 'native-base';
import { Alert } from 'react-native';
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
        if (this.state.password === this.state.conPass) {
            console.log('hello')
        }
        else {
            this.setState({ password: '', conPass: '' })
            Alert.alert(
                'Alert',
                'Password does not match, Please re-enter a new password again.',
                [{ text: 'OK' }],
                { cancelable: false }
            )
        }
    }

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
                        <Item floatingLabel>
                            <Label>Confirm Password</Label>
                            <Input
                                secureTextEntry
                                onChangeText={(text) => this._onChange('conPass', text)}
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
            </Container>
        );
    }
}
export default SignUpScreen;