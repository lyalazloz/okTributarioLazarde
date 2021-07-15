import React from "react"
import loading from "../../assets/img/loadingbar.gif"
import "../loader/loader.scss"

export const Loader = () => { 
    
    return (
        <div className="loader">
            <img src={loading} alt="loading bar" />
        </div>
    )
}