import firebase from '../../config/firebase';
import productAction from '../action/productAction';

export default class productMiddleWare {
    static setOrderStatus(data) {
        return dispatch => {
            firebase.database().ref(`Orders/${data.uId}/${data.orderId}`)
                .update({ status: 'Delivered' })
        }
    }

    static searchEng(data) {
        return dispatch => dispatch(productAction.goSearchEng(data));
    }

    static shipping(data) {
        return dispatch => dispatch(productAction.shippingDetail(data))
    }

    static orderDetail(data) {
        return dispatch => dispatch(productAction.orderDetail(data))
    }

    static getAllProducts() {
        return dispatch => {
            dispatch(productAction.loading(true));
            firebase.database().ref('Products').on('value', snapshot => {
                dispatch(productAction.allProducts(snapshot.val()));
                dispatch(productAction.loading(false));
            })
        }
    }

    static getAllClientOrders() {
        return dispatch => {
            dispatch(productAction.loading(true));
            firebase.database().ref('Orders').on('value', snapshot => {
                dispatch(productAction.loading(false));
                dispatch(productAction.allOrders(snapshot.val()));
            })
        }
    }

    static deleteItem(data) {
        return dispatch => {
            for (let i = 1; i <= 6; i++) {
                firebase.storage().ref()
                    .child(`product_images/product_${data}/img${i}.jpg`).delete().then(() => {
                    }).catch(err => console.log(err.message))
            }
            firebase.database().ref(`Products/${data}`).remove()
                .then(() => console.log('Delete Item Successfully!'))
                .catch(err => console.log(err))
        }
    }

    // static deleteItem(data) {
    //     return dispatch => {
    //         console.log(data)
    //         for (let i = 1; i <= 6; i++) {
    //             firebase.storage().ref()
    //                 .child(`product_images/product_${data}/img${i}.jpg`).delete().then(() => {
    //                     if (i === 6) {
    //                         firebase.database().ref(`Products/${data}`).remove()
    //                             .then(() => console.log('Delete Item Successfully!'))
    //                             .catch(err => console.log(err))
    //                     }
    //                 }).catch(err => console.log(err.message))
    //         }
    //     }
    // }

    static viewProductDetail(data) {
        return dispatch => {
            let sortItem;
            dispatch(productAction.loading(true));
            firebase.database().ref('Products').once('value')
                .then(snapshot => {
                    sortItem = snapshot.val().filter(item => item.id === data);
                    dispatch(productAction.viewDetail(sortItem));
                    dispatch(productAction.loading(false));
                }).catch(err => console.log(err));
        }
    }

    static getOrder(data) {
        return dispatch => {
            dispatch(productAction.loading(true));
            firebase.database().ref('Orders').on('value', snapshot => {
                let uid = Object.keys(snapshot.val());
                let arr = Object.values(snapshot.val())
                    .filter((item, index) => index === uid.indexOf(data));
                dispatch(productAction.loading(false));
                dispatch(productAction.orders(Object.values(arr[0])));
            })
        }
    }

    static getItuneItemsOnly() {
        return dispatch => {
            dispatch(productAction.loading(true));
            firebase.database().ref('Products').once('value').then(snapshot => {
                let ituneItemList = [];
                for (let i = 0; i < snapshot.val().length; i++) {
                    if (
                        snapshot.val()[i].id === 13 ||
                        snapshot.val()[i].id === 22 ||
                        snapshot.val()[i].id === 23) {
                        ituneItemList.push(snapshot.val()[i]);
                    }
                }
                dispatch(productAction.appleItunes(ituneItemList));
                dispatch(productAction.loading(false));
            }).catch(err => console.log(err));
        }
    }

    static getWatchItemsOnly() {
        return dispatch => {
            dispatch(productAction.loading(true));
            firebase.database().ref('Products').once('value').then(snapshot => {
                let watchItemList = [];
                for (let i = 0; i < snapshot.val().length; i++) {
                    if (
                        snapshot.val()[i].id === 7 ||
                        snapshot.val()[i].id === 8 ||
                        snapshot.val()[i].id === 11) {
                        watchItemList.push(snapshot.val()[i]);
                    }
                }
                dispatch(productAction.watchItems(watchItemList));
                dispatch(productAction.loading(false));
            }).catch(err => console.log(err));
        }
    }

    static addNew(data) {
        return dispatch => {
            dispatch(productAction.loading(true));
            let urls = []
            let file = data.imageFiles;
            firebase.storage().ref('product_images/').listAll().then(res => {
                file.map((item, index) => {
                    let storegeRef = firebase.storage()
                        .ref(`product_images/product_${res.prefixes.length}/img${++index}.jpg`);
                    storegeRef.put(item).on('state_changed', snap => { }, err => { },
                        () => storegeRef.getDownloadURL().then(url => {
                            urls.push(url)
                            if (urls.length === file.length) {
                                let newItem = {
                                    qty: 1,
                                    img: urls[0],
                                    title: data.title,
                                    price: data.price,
                                    colors: data.color,
                                    detail: data.detail,
                                    id: res.prefixes.length,
                                    brand_name: data.brandName,
                                    product_detail: data.fullDetail,
                                    thumbnail: urls.slice(1)
                                }
                                firebase.database().ref(`Products/${res.prefixes.length}`).set(newItem);
                                dispatch(productAction.loading(false));
                            }
                        }));
                })
            }).catch(err => console.log(err))
        }
    }
}