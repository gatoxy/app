import { Image, Text, TouchableOpacity, View } from "react-native";
import { DetailsType } from "../../types";
import { styles } from "./styles";
import { useApp } from "../../contexts/AppContext";
import { useNavigation } from "@react-navigation/native";
import { MediaIcon } from "../MediaIcon";
import { Average } from "../Average";
import { Genres } from "../Genres";

import DefaultImage from "../../assets/backdrop-default.png";
const DEFAULT_IMAGE = Image.resolveAssetSource(DefaultImage).uri;

interface Props {
  data: DetailsType;
}

export function Banner({ data }: Props) {
  const { onOpenSummary } = useApp();

  const navigation = useNavigation();
  
  function navigateToDetails() {
    navigation.navigate("Details", {
      id: data.id,
      type: data.type,
    })
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.75} onPress={navigateToDetails}>
        <Image
          style={styles.image}
          source={{
            uri: data.backdrop_path ? `https://image.tmdb.org/t/p/original/${data.backdrop_path}` : DEFAULT_IMAGE,
          }}
        />
      </TouchableOpacity>

      <Text style={styles.title}>{data.title}</Text>

      <Genres data={data.genres} textAlign="center" />

      <View style={styles.row}>
        <Text style={styles.year}>{new Date(data.release_date).getFullYear()}</Text>

        <Average vote_average={data.vote_average} />

        <MediaIcon type={data.type} />
      </View>
    </View>
  );
}