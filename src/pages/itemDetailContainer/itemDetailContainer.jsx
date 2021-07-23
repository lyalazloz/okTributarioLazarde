import "./itemDetailContainer.scss";
import { db } from '../../firebase/firebase'
import { ItemDetail } from "../../components/itemDetail/itemDetail";
import { Loader } from "../../components/loader/loader";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

export const ItemDetailContainer = () => {

  const [item, setItem] = useState();   
  const [loading, setLoading] = useState(false); 
  const { id } = useParams(); 
  
  useEffect(() => {
    
    setLoading(true);

    const itemRef = db.collection("products").doc(id);
    itemRef.get().then((itemGet) => {

      setLoading(true);
      if (itemGet.data()) {
        console.log('Document data:', itemGet.data);       
      } else {
        console.log('No existe este documento!');
      }
      const item = { id: itemGet.id, ...itemGet.data() }        
      setItem(item);
      
    }).catch((error) => {
      console.log("Ocurrió un error al buscar el item:", error);
    }).finally(()=> {
      setLoading(false);  
      return           
    });       
    
  },[id])  

  return loading ? <Loader/> : (
    <section className="itemDetailContainer">      
      <ItemDetail item= {item}  />      
    </section>
  );
};
