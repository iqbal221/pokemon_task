import Image from "next/image";

const PokemonGallery = ({ pokemon, i }) => {
  console.log("https://pokeapi.co/api/v2/pokemon/1/");
  return (
    <div>
      <div className="card lg:w-[235px] w-full lg:h-[307px] p-4 card-compact bg-base-100 rounded-0 bg-opacity-60 ">
        <figure>
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
              i + 1
            }.png`}
            alt=""
            width="215"
            height="215"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-xl capitalize font-semibold">{pokemon.name}</h2>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default PokemonGallery;
