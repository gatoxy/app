import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { MediaDetails } from "../../types";
import { styles } from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../theme";
import { useApp } from "../../contexts/AppContext";
import { useNavigation } from "@react-navigation/native";

interface Props {
  data: MediaDetails;
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
            uri: `https://image.tmdb.org/t/p/original/${data.backdrop_path}`,
          }}
        />
      </TouchableOpacity>

      <Text style={styles.title}>{data.title}</Text>

      <View style={styles.genres}>
        {data.genres?.map((genre, index) => (
          <Text style={styles.genre_name} key={genre.id}>{genre.name}</Text>
        ))}
      </View>

      <View style={styles.row}>
        <Text style={styles.year}>{new Date(data.release_date).getFullYear()}</Text>

        {/* <TouchableOpacity activeOpacity={0.75} style={styles.button}>
          <Text style={styles.button_text}>Mais informações</Text>
        </TouchableOpacity> */}

        <View style={styles.average}>
          <FontAwesome name="star" size={10} color={COLORS.YELLOW} />
          <Text style={styles.average_text}>{data.vote_average}</Text>
        </View>

        <View style={styles.media}>
          <Ionicons name="film-outline" size={10} color={COLORS.WHITE} />
          <Text style={styles.media_text}>Filme</Text>
        </View>
      </View>
    </View>
  );
}