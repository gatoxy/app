import { Image, TouchableOpacity } from "react-native";
import { useApp } from "../../../../contexts/AppContext";
import { Movie } from "../../../../types";
import { styles } from "./styles";

interface Props {
  data: Movie;
}

export function CarouselCard({ data }: Props) {
  const { onOpenSummary } = useApp();

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.75}
      onPress={() => onOpenSummary(data)}
    >
      <Image
        style={styles.image}
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${data.poster_path}`,
        }}
      />
    </TouchableOpacity>
  );
}