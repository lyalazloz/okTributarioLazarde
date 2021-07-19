import "../itemList/itemList.scss";
import { db } from '../../firebase/firebase';
import { Item } from "../item/item.jsx";
import { Loader } from "../loader/loader.jsx";
import { useParams } from "react-router-dom";
import React , { useState, useEffect} from "react";

export const ItemList = () => {
  const [item, setItem] = useState([]);   
  const [loading, setLoading] = useState(false); 
  const { id } = useParams(); 

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
      setItem(items);

    }).catch((error) => {
      console.log("Ocurrió un error al buscar los items", error);
    }).finally(()=> {
      setLoading(false);             
    });       
        
  },[])

  const itemsFilters= () =>{
    return id ? item.filter((i) => i.categoryId === id) : item;
  };
  const itemL= itemsFilters(); 

  return loading ? <Loader/> : itemL.map(i =>{
    return <Item item={i} key={i.id} />
  });  
}