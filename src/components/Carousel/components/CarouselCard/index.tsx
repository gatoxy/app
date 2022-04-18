import { Image, TouchableOpacity } from "react-native";
import { useApp } from "../../../../contexts/AppContext";
import { MediaType } from "../../../../types";
import { styles } from "./styles";

import DefaultImage from "../../../../assets/poster-default.png";
const DEFAULT_IMAGE = Image.resolveAssetSource(DefaultImage).uri;

interface Props {
  data: MediaType;
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
          uri: data.poster_path ? `https://image.tmdb.org/t/p/w500/${data.poster_path}` : DEFAULT_IMAGE,
        }}
      />
    </TouchableOpacity>
  );
}