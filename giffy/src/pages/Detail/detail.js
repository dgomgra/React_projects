import React, { useContext } from "react";
import Gif from "../../components/Gif/Gif";
import useGlobalGifs from "../../hooks/useGlobalsGifs";
// import GifsContext from "../../context/GifsContext";

export default function Detail ({ params }) {
    const gifs = useGlobalGifs()
    console.log({gifs});

    const gif = gifs.find(singleGif => singleGif.id === params.id)

    console.log(gif);
    return <Gif {...gif}/>
}