import {
    ORDERS,
    ALL_ORDERS,
    WATCH_ITEMS,
    VIEW_DETAIL,
    ORDER_DETAIL,
    APPLE_ITUNES,
    ALL_PRODUCTS,
    SHIPPING_DETAIL,
    // LOADING
} from '../constants.js';

const initialState = {
    orders: [],
    ituneItem: [],
    watchItems: [],
    productList: [],
    orderedItem: [],
    viewDetailItem: {},
    shippingDetail: {},
    allClientOrders: {},
    // isLoading: false
}

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case VIEW_DETAIL:
            return {
                ...state,
                viewDetailItem: action.payload,
            }
        // case LOADING:
        //     return {
        //         ...state,
        //         isLoading: action.payload,
        //     }
        case ALL_PRODUCTS:
            return {
                ...state,
                productList: action.payload,
            }
        case APPLE_ITUNES:
            return {
                ...state,
                ituneItem: action.payload,
            }
        case WATCH_ITEMS:
            return {
                ...state,
                watchItems: action.payload,
            }
        case ORDERS:
            return {
                ...state,
                orders: action.payload
            }
        case ORDER_DETAIL:
            return {
                ...state,
                orderedItem: action.payload
            }
        case ALL_ORDERS:
            return {
                ...state,
                allClientOrders: action.payload
            }
        case SHIPPING_DETAIL:
            return {
                ...state,
                shippingDetail: action.payload
            }
        default:
            return state
    }
}