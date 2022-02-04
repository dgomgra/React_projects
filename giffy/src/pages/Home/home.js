import React, {useState, useEffect} from "react";
import { Link, useLocation } from "wouter"
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import { useGifsCustomHook } from "../../hooks/useGifs_customHook";
import getGifs_service from "../../services/getGifs_service";

const POPULAR_GIFS = ["Matrix", "Chile", "Colombia", "Ecuador"]

export default function Home () {
    const [keyword, setKeyword] = useState('')

    const [path, pushLocation] = useLocation();

   const {loading, gifs} = useGifsCustomHook()

    const handleSubmit = evt => {
        evt.preventDefault() // hay que buscar porque hay que añadirlo para que no se refresque toda la pantalla
        // navegar a otra ruta
        pushLocation(`/search/${keyword}`)
    }

    const handleChange = evt => {
        setKeyword(evt.target.value)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type='text' value={keyword} 
                    placeholder="Searcha gif here..."
                />
            </form>
            <h3 className='App-title'>Última búsqueda</h3>
            <ListOfGifs gifs={ gifs } />
            <h3 className='App-title'>Los gifs más populares</h3>
            <ul>
                {POPULAR_GIFS.map((popularGif) => (
                    <li key={popularGif}>
                        <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}