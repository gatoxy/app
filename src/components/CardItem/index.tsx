import { Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function CardItem() {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.80}>
      <Image
        style={styles.image}
        source={{
          uri: "https://image.tmdb.org/t/p/w500//abPQVYyNfVuGoFUfGVhlNecu0QG.jpg"
        }}
      />
    </TouchableOpacity>
  );
}