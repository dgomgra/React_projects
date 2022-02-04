import React from "react";
import { Link } from "wouter";
import './Gif.css'

export default function Gif ({ title, id, url}) {
    return (
        <>
            <div className="dv_gif">
                <Link to={`/gif/${id}`}>
                    <a href={`#${id}`} className='Gif'>
                        <img alt={title} src={url} />
                    </a>
                    <span className="title">{title}</span>
                </Link>
            </div>

        </>
    )
} 