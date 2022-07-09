import React from "react";
import { useParams } from "react-router-dom";

const Pelicula = (props) =>{
    let {title} = useParams();
    return(
        <>
        <h1>{title}</h1>
        </>
    );
}

export default Pelicula;