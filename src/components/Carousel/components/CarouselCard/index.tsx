import { Image, TouchableOpacity } from "react-native";
import { useApp } from "../../../../contexts/AppContext";
import { Media } from "../../../../types";
import { styles } from "./styles";

interface Props {
  data: Media;
  small?: boolean;
}

export function CarouselCard({ data, small = false }: Props) {
  const { onOpenSummary } = useApp();

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.75}
      onPress={() => onOpenSummary(data)}
    >
      <Image
        style={[styles.image, small && styles.image_small]}
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${data.poster_path}`,
        }}
      />
    </TouchableOpacity>
  );
}