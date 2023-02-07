import Image from "next/image";
import styles from "../../styles/PokemonGallery.module.css";
import PokemonGallery from "./PokemonGallery";

const Pokemon = (props) => {
  const pokemons = props.PokemonData.PokemonData.results;
  console.log(pokemons);
  return (
    <div className={styles.backgroundImage}>
      <div className="flex justify-center pt-16">
        <Image src="/Logo.png" alt="" width="265" height="96"></Image>
      </div>
      <div className="lg:w-[1543px] lg:h-[654px] w-[390px] h-[333px] mx-auto flex justify-center lg:my-24 my-6">
        <div className="grid lg:grid-cols-5 grid-cols-none grid-rows-1 lg:gap-x-24  lg:gap-y-10 gap-4">
          {pokemons?.map((pokemon, i) => (
            <PokemonGallery key={i} i={i} pokemon={pokemon}></PokemonGallery>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
