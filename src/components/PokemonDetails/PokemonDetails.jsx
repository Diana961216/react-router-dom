import { useParams } from "react-router"; //this hook is used to access URL parameters

const PokemonDetails = (props) => {
    const {pokemonId} = useParams();
    // Always verify that any props are being passed correctly!
    console.log(props); 
    console.log("Url Params:", pokemonId);

  // New code: Find a single pokemon object from the array of pokemon
  //           using the pokemonId from the URL params.
  const singlePokemon = props.pokemon.find((poke) => (
    poke._id === Number(pokemonId)
  ));
  console.log("Single Pokemon:", singlePokemon);
  
  return (
    <>
      <h2>{singlePokemon.name}</h2>
      <dl>
        <dt>Weight:</dt>
        <dd>{singlePokemon.weight}</dd>
        <dt>Height:</dt>
        <dd>{singlePokemon.height}</dd>
      </dl>
    </>
  );
  };
  
  export default PokemonDetails;
  