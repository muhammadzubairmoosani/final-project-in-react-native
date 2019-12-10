import firebase from '../../config/firebase.js';
import cartAction from '../action/cartAction';

export default class cartMiddleWare {
    static newArr = [];
    static removeItem(data) {
        return dispatch => {
            this.newArr = data
        }
    }
    static goCart(data) {
        return dispatch => {
            firebase
                .database()
                .ref('Products')
                .on('value', snapshot => {
                    let arr = snapshot.val().filter(item => item.id === data[0]);
                    this.newArr.push(arr[0]);
                    dispatch(cartAction.sendArray(this.newArr))
                })
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
            shipTo: data.fullName,
            orderNumber: dateNow,
            status: 'Processing',
            city: data.city,
            email: data.email,
            phone: data.phone,
            address: data.address,
            country: data.country
        }
        return dispatch => {
            firebase.database().ref('Orders').child(data.userId).push(userInfo)
                .then(() => dispatch(cartAction.cleanCart({})))
                .catch(err => console.log(err))
        }
    }
}