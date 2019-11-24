import {
    ORDERS,
    LOADING,
    SEARCH_ENG,
    ALL_ORDERS,
    VIEW_DETAIL,
    WATCH_ITEMS,
    APPLE_ITUNES,
    ALL_PRODUCTS,
    ORDER_DETAIL,
    SHIPPING_DETAIL
} from '../constants.js';

export default class productAction {
    static loading(data) {
        return { type: LOADING, payload: data }
    }

    static goSearchEng(data) {
        return { type: SEARCH_ENG, payload: data }
    }

    static allProducts(data) {
        return { type: ALL_PRODUCTS, payload: data }
    }

    static viewDetail(data) {
        return { type: VIEW_DETAIL, payload: data }
    }

    static appleItunes(data) {
        return { type: APPLE_ITUNES, payload: data }
    }

    static watchItems(data) {
        return { type: WATCH_ITEMS, payload: data }
    }

    static orders(data) {
        return { type: ORDERS, payload: data }
    }

    static orderDetail(data) {
        return { type: ORDER_DETAIL, payload: data }
    }

    static allOrders(data) {
        return { type: ALL_ORDERS, payload: data }
    }

    static shippingDetail(data) {
        return { type: SHIPPING_DETAIL, payload: data }
    }

}