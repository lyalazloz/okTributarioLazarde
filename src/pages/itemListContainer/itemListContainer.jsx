import "./itemListContainer.scss";
import { db } from '../../firebase/firebase';
import { ItemList } from "../../components/itemList/itemList";
import { Loader } from "../../components/loader/loader";
import React , { useState, useEffect} from "react";

export const ItemListContainer = () => { 

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
      setItem(items);

    }).catch((error) => {
      console.log("Ocurrió un error al buscar los items", error);
    }).finally(()=> {
      setLoading(false);             
    });       
        
  },[])

  return loading ? <Loader/> : (
    <section className="itemListContainer">      
      <div className="itemList"><ItemList className="itemlist" item={item}  /></div>      
    </section>
  );     
  
};