import PokemonBlog from "@/Components/PokemonBlog/PokemonBlog";
import Pokemon from "@/Components/PokemonGallery/Pokemon";

export default function Home(PokemonData) {
  return (
    <>
      <Pokemon PokemonData={PokemonData}></Pokemon>;<PokemonBlog></PokemonBlog>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
  );
  const data = await res.json();

  return {
    props: {
      PokemonData: data,
    },
  };
};
