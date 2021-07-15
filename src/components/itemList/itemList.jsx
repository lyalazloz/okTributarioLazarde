import React , { useState, useEffect} from "react";
import { Item } from "../item/item.jsx";
import { Loader } from "../loader/loader.jsx";
import "../itemList/itemList.scss";
import { dataBase } from '../../firebase/firebase';

export const ItemList = () => {

  const [item, setItem] = useState([]);   
  const [loading, setLoading] = useState(false);  
    
  useEffect(() => {
    
    setLoading(true);    
    const db = dataBase;
    const itemColletion = db.collection("products");
   
    itemColletion.get().then((querySnapshot) => {
      if (querySnapshot.size === 0) {
        console.log("No Results");
      }
      setItem(querySnapshot.docs.map(doc => doc.data()));      
    }).catch((error) => {
      console.log("Error searching items,", error);
    }).finally(()=> {
      setLoading(false);             
    });   
        
  },[])
  
  return loading ? <Loader/> : <Item item={item} key={item.id} />;
  
}