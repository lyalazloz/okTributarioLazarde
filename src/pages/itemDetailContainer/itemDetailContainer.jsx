import "./itemDetailContainer.scss";
import { db } from "../../firebase/firebase";
import { ItemDetail } from "../../components/itemDetail/itemDetail";
import { Loader } from "../../components/loader/loader";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState();   
  console.log("item: ", item)

  const [loading, setLoading] = useState(false); 
  const { id } = useParams(); 
  console.log('idParam: ', id)

  useEffect(() => { 

    setLoading(true); 
    const itemRef = db.collection('products').doc(id);
    console.log("itemRef: ", itemRef)

    itemRef.get().then((itemId) => {
      console.log("itemId get: ", itemId)

      if (!itemId.exists) {
        console.log('No such document!');
      } else {
        console.log('Document data:', itemId.data);
      }

      const item = {id: itemId.id, ...itemId.data}
      console.log("item2: ", item)
      
      setItem(item);
      console.log(item);
    }).catch((error) => {
      console.log("Ocurrió un error al buscar el item:", error);
    }).finally(()=> {
      setLoading(false);  
      return           
    });       
    
  },[id])

  return loading ? <Loader/> : (
    <section className="itemDetailContainer">      
      <ItemDetail item={item}  />      
    </section>
  );
};



/*ItemDetailContainer debería hacer algo parecido, con la excepción que debería hacer una consulta de 1 sólo item a firestore. Para eso vas a usar el id que viene de useParams. Sería algo como db.collection("items").doc(id) , o sea especificas a que dentro de tu colección de items, querés buscar específicamente el ítem que coincida con ese id */