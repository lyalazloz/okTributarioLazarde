import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import { db } from '../../firebase/firebase'

const db = getFirestore();

const orders = db.collection("orders");
const newOrder = {
    buyer: userInfo,
    items: cart,
    date: firebase.firestore.Timestamp.fromDate(new Date()),
    total: useContext(CartContext)
};

orders.add(newOrder).then(({id}) => {
    setOrderId(id);
}).catch(err => {
    setError(err);
}).finally(() => {
    serLoading(false);
});
