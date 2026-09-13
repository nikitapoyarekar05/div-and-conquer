interface PokemonImageProps {
    url: string;
}

const PokemonImage = ({ url }: PokemonImageProps) => {
    console.log({ url });

    return <div>PokemonImage Component</div>;
};

export default PokemonImage;
