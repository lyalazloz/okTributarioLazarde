import "../itemList/itemList.scss";
import { db } from '../../firebase/firebase';
import { Item } from "../item/item.jsx";
import { Loader } from "../loader/loader.jsx";
import React , { useState, useEffect} from "react";

export const ItemList = () => {
  const [item, setItem] = useState([]);   
  const [loading, setLoading] = useState(false);  

  useEffect(() => { 

    setLoading(true);    
    const itemList = db.collection("products");    
  
    itemList.get().then((querySnapshot) => {
      
      if (querySnapshot.size === 0) {
        console.log("Sin Resultados");
      }
      
      const items = querySnapshot.docs.map((doc) => {   
        let item = {id: doc.id, ...doc.data()}
        return item             
      })
      console.log("items: ", items)
      setItem(items);

    }).catch((error) => {
      console.log("Ocurrió un error al buscar los items", error);
    }).finally(()=> {
      setLoading(false);             
    });       
        
  },[])

  return loading ? <Loader/> : (
    <div  className="itemList">
      {item.map(i =>{
        return <Item item={i} key={i.id} />
        })
      }
    </div>
  );
  
}