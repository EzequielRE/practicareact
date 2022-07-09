import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const CardInfo = (props) =>{
    const image = "https://image.tmdb.org/t/p/w220_and_h330_face/"+props.pelicula.poster_path;
    const navigate = useNavigate();

    return(
        <>
            <Card>
            <CardMedia
                component="img"
                height="330"
                image={image}
                alt="pelicula image"
            />
            <CardActions>
                <Button size="small" onClick={() => {navigate(`/pelicula/${props.pelicula.title}`)}}>+ Info</Button>
            </CardActions>
            </Card>
        </>
    );
}

export default CardInfo;