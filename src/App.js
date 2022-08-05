import { Col } from 'antd';
import PokemonList from './components/PokemonList';
import Searcher from './components/Searche';
import './App.css';
import logo from './static/logo.svg'
import { useEffect } from 'react';
import { getPokemon } from './api';
import { setPokemons } from './actions';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const pokemons = useSelector(state => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      dispatch(setPokemons(pokemonsRes));
    };

    fetchPokemons()
  }, [])


  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}


export default App;
