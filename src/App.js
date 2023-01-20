import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([]);
      useEffect(()=>{
          axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0%22")
              .then(response=>{setPokemon(response.data.results)})
      },[]);


  return (
    <div className="App">
      <button className='button'>fetch pokemon</button>
      <ul>
        {
          pokemon.map((pokemon,i)=>{
            return <li key={i}>{pokemon.name}</li>
          })
        }
      </ul>

    </div>
  );
}

export default App;