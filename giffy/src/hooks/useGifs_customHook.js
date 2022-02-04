import {useContext, useEffect, useState} from "react";
import GifsContext from "../context/GifsContext";
import getGifs_service from "../services/getGifs_service";


export function useGifsCustomHook ( {keyword} = {keyword: null}) {
    // Definimos un state para cambiar activar el spiner
    const [loading, setLoading] = useState(false)
    // Defenimos un state para poder cambiar el estado de los gifs
    
    const {gifs, setGifs} = useContext(GifsContext)
    
    // Hacemos uso del hook useEffect para pasar los gifs obtenidos el [] final hace que solo se ejecute una vez
    useEffect(function () {
        setLoading(true)

        // Guardamos la keyword en el localStorage
        const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

        // Llamamos al  servicio y le pasamos la keyword
        getGifs_service( { keyword: keywordToUse })
        .then(gifs => {
            setGifs(gifs)
            setLoading(false)
            // Recuperamos la keyword de localStorage
            localStorage.setItem('lastKeyword', keyword)
            })
    }, [keyword, setGifs])

    return {loading, gifs}
}