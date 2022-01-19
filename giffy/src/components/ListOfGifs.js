import React, {useEffect, useState} from 'react'
import getGifs_service from '../services/getGifs_service';
import Gif from "./Gif";

export default function ListOfGifs ({params}) {
    const {keyword} = params
    // Definimos un state para cambiar activar el spiner
    const [loading, setLoading] = useState(false);
    // Defenimos un state para poder cambiar el estado
    const [gifs, setGifs] = useState([])

    // Hacemos uso del hook useEffect para pasar los gifs obtenidos el [] final hace que solo se ejecute una vez
    useEffect(function () {
        // Activamos el spiner
        setLoading(true)
        // Llamamos al  servicio y le pasamos la keyword
        getGifs_service({ keyword}).then(gifs => {
            setGifs(gifs)
            setLoading(false)
        })
    }, [keyword])

    if (loading) return <i>Cargando ... 🕒</i>
    return <div className='listOfList'>
        {
            gifs.map(({id, title, url}) => 
                <Gif
                    key={id} // en una lista de prop, hay que tener una key unica
                    title={title} 
                    url={url} 
                    id={id}
                />
            )

        }
    </div>
      
}