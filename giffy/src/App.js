import React from 'react'
import './App.css' 
import ListOfGifs from './components/ListOfGifs'
// Para hacer el routing
import { Link, Route } from "wouter";

function App() {



  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link href='/gif/panda'>Gifs de pandas</Link>
        <Link href='/gif/Matrix'>Gifs de Matrix</Link>
        <Link href='/gif/car'>Gifs de coches</Link>
        <Link href='/gif/motorbike'>Gifs de motos</Link>
        <Route 
          component={ListOfGifs}
          path="/gif/:keyword" />
      </section>
    </div>
  );
}

export default App;
