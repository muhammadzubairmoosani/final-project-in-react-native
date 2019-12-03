import React, { Component } from "react";
import { Container, Content, Accordion, Text, Spinner } from "native-base";
import { connect } from 'react-redux';
import productMiddleware from '../../../store/middleWare/productMiddleware';
import authMiddleware from '../../../store/middleWare/authMiddleware';
const dataArray = [
    { title: "First Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];


class ProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uid: ''
        }
    }

    componentDidMount() {
        this.props.getUserStatusDispatch()
    }
    componentDidUpdate(prevProps) {
        // if (prevProps.user !== this.props.user) {
        //     this.setState({ uid: this.props.user.uid })
        //     this.props.getOrderDispatch(this.state.uid)
        // }
    }
    render() {
        const { isLoading, orders } = this.props;
        // console.log(orders)
        return (
            <Container>
                {isLoading ?
                    <Spinner color='blue' />
                    :
                    <>
                        {orders.length ?
                            <>
                                <Text
                                    style={{
                                        fontSize: 18,
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                        marginTop: 5,
                                        marginBottom: 5,
                                        color: '#444'
                                    }}
                                >Previous Orders</Text>
                                <Content padder>
                                    <Accordion dataArray={orders} expanded={0}>
                                        <Text>hello world</Text>
                                    </Accordion>
                                </Content>
                            </>
                            : <Text>No Orders!</Text>
                        }
                    </>
                }
            </Container>
        );
    }
}
const mapStateToProps = state => {
    return {
        orders: state.productReducer.orders,
        user: state.authReducer.user,
        isLoading: state.search_form_loadingReducer.dataLoading
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getOrderDispatch: data => dispatch(productMiddleware.getOrder(data)),
        getUserStatusDispatch: () => dispatch(authMiddleware.isStatus()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)