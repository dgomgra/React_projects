import React from 'react'
import './App.css' 
// Para hacer el routing
import { Link, Route } from "wouter";
import Home from './pages/Home/home';
import SearchResults from './pages/SearchResults/searchResults';
import Detail from './pages/Detail/detail';
import Context from './context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';

function App() {
  return (
     <Context.Provider value= {
       {
        name: 'David desde el provider',
        activo: false
       }
     }>
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <img className="App-logo" alt='Giffy logo' src='/logo.png' />
          </Link>
            <span> GIFFY</span>
          <GifsContextProvider>
            <Route 
              component={Home}
              path='/'
            />
            <Route 
              component={SearchResults}
              path='/search/:keyword'
            />
            <Route 
              component={Detail}
              path='/gif/:id'
            />
          </GifsContextProvider>
        </section>
      </div>
    </Context.Provider>
  );
}

export default App;
