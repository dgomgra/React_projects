import React from 'react'
import Gif from "../Gif/Gif";
import './ListOfGifs.css' 

export default function ListOfGifs ({ gifs }) {
    return <div className='ListOfGifs'>
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