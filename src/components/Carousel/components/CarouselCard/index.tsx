import { Image, TouchableOpacity } from "react-native";
import { Movie } from "../../../../types";
import { styles } from "./styles";

interface Props {
  data: Movie;
}

export function CarouselCard({ data }: Props) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.75}>
      <Image
        style={styles.image}
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${data.poster_path}`,
        }}
      />
    </TouchableOpacity>
  );
}