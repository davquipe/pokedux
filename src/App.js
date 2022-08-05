import { Col, Spin } from 'antd';
import PokemonList from './components/PokemonList';
import Searcher from './components/Searche';
import './App.css';
import logo from './static/logo.svg'
import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchPokemonsWithDetails } from './slices/dataSlice';

function App() {

  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);

  const loading = useSelector((state) => state.ui.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
  }, []);


  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading ? (<Col offset={12}>
        <Spin spinning size='large' tip='Loading...' />
      </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  );
}


export default App;
