import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base';

class SignInScreen extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Email</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel>
                            <Label>Password</Label>
                            <Input secureTextEntry />
                        </Item>
                        <Button
                            block
                            style={{ margin: 10, marginTop: 20, marginBottom: 20 }}
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
export default SignInScreen;