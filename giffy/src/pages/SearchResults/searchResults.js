import React from "react";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import Spinner from "../../components/Spinner/spinner";
import { useGifsCustomHook } from "../../hooks/useGifs_customHook";


export default function SearchResults ( { params }) {
    const { keyword} = params
    const { loading, gifs } = useGifsCustomHook( { keyword })

    return <>
        {       
            loading 
                ? <Spinner />
                : <ListOfGifs gifs={ gifs } />
        }
    </>
}