import React from "react";
import peliculasJSON from './../../assets/movies.json';
import CardInfo from "../cardinfo/cardinfo";
import './home.css';

const Home = () =>{
    const peliculas = peliculasJSON.slice(0,5);
    const listPeliculas = peliculas.map( (pelicula) =>{
        return <CardInfo key={pelicula.id} pelicula={pelicula}/>

    });
    return(
        <>
            <div className="home">
                <h2>Películas Recientes</h2>
                <div className="peliculas">
                    {listPeliculas}
                </div>
            </div>
        </>
    );
}

export default Home;