import { Col } from 'antd';
import PokemonList from './components/PokemonList';
import Searcher from './components/Searche';
import './App.css';
import logo from './static/logo.svg'
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPokemon } from './api';
import { setPokemons as setPokemonsActions } from './actions';

function App({ pokemons, setPokemons }) {
  console.log('~Pokemon ', pokemons);
  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      setPokemons(pokemonsRes)
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

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
