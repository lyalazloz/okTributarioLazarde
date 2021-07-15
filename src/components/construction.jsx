import React from "react"
import construction from "../assets/img/construction.jpg";
import "./loader/loader.scss"

export const Construction = () => { 
    
    return (
        <div className="loader">
            <img src={construction} alt="pagina en construccion" />
        </div>
    )
}