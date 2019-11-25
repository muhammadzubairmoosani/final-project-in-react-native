import firebase from '../../config/firebase.js';
import cartAction from '../action/cartAction';

export default class cartMiddleWare {
    static newArr = [];

    static removeItem(data) {
        this.newArr.splice(data, 1);
        return dispatch => dispatch(cartAction.removeItemFromCart(data));
    }

    static goCart(id, itemQty) {
        return dispatch => {
            firebase.database().ref('Products').once('value')
                .then(snapshot => {
                    let arr = snapshot.val().filter(item => item.id === id);
                    // arr[0].qty = itemQty ? itemQty : 1;
                    // this.newArr.push(arr[0]);
                    dispatch(cartAction.addTocartInAction(arr));
                })
                .catch(err => console.log(err));
        }
    }

    static checkOut(data) {
        let dateNow = Date.now();
        let d = new Date();
        let date = d.getDate();
        let month = d.getMonth() + 1;
        let year = d.getFullYear();
        let fullDate = date + '/' + month + '/' + year;
        let arr = []
        this.newArr.map((item) => arr.push(item.price))
        let total = arr.reduce((a, b) => a + b);
        const userInfo = {
            orderList: this.newArr,
            total: total + 200,
            date: fullDate,
            shipTo: data.userName,
            orderNumber: dateNow,
            status: 'Processing',
            city: data.city,
            email: data.email,
            phone: data.phone,
            address: data.address,
            country: data.country,
        }
        return dispatch => {
            firebase.database().ref('Orders').child(data.userId).push(userInfo)
                .then(() => dispatch(cartAction._message('data Successfully saved')))
                .catch(err => console.log(err))
        }
    }
}

