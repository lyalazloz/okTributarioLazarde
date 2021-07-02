import React,{useEffect, useState} from "react"
import { useParams } from "react-router-dom";
import { ItemDetail } from "../../components/itemDetail/itemDetail";
import ITEMS from '../../data/items.json'
import "./itemDetailContainer.scss"

export const ItemDetailContainer = () => {
  const { id } = useParams()
  const [item, setItem] = useState([])

  // console.log (id)
  console.log (item)


  useEffect(() => {
    const getItem = () => {
      return ITEMS.filter((item) => item.id === id)           
    }

    const item = getItem();
    setItem (item[0])
  }, [id]);  
    
  return(
    <section className="itemDetailContainer" >
      <ItemDetail item= {item}/>         
    </section>
  )
    
      
}

// export const ItemDetailContainer = () =>{

//   const [item, setItem] = useState([])

//   useEffect(() => {
//     const getItem = async () => {
//       const response = await fetch("../items.json");
//       const result = await response.json()
//       setItem(result)
//     }
//     getItem();
//   }, [2000]); 

//   return <ItemDetail item= {item}/>      
// }

