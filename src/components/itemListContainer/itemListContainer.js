import {ItemCount} from '../itemCount/itemCount'

export const ItemListContainer = (props) => {
    return (    
        <div>
            <h3>{props.greeting}</h3>  
            <ItemCount stock="5" initial="1" /> 
        </div>
            
    )
}

