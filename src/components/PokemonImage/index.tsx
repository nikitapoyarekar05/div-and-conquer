import Image from 'next/image';
import styles from './PokemonImage.module.css';
interface PokemonImageProps {
    src: string;
    alt: string;
}

const PokemonImage = ({ src, alt }: PokemonImageProps) => {
    return (
        <Image
            className={styles.image}
            src={src}
            alt={alt}
            style={{ objectFit: 'contain' }}
            width={200}
            height={150}
        />
    );
};

export default PokemonImage;
