import { Image, ScrollView, Text, View } from "react-native";
import { COLORS } from "../../theme";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { DetailsType } from "../../types";

interface Props {
  data: DetailsType;
}

export function DetailsHeader({ data }: Props) {
  return (
    <View style={styles.container} >
      <Image
        style={styles.image}
        source={{
          uri: `https://image.tmdb.org/t/p/original/${data.backdrop_path}`,
        }}
      />

      <View style={styles.summary}>
        <Image
          style={styles.poster}
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${data.poster_path}`
          }}
        />

        <View style={styles.content}>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">{data.title}</Text>
          <View style={styles.row}>
            <Text style={styles.year}>{new Date(data.release_date).getFullYear()}</Text>

            <View style={styles.average}>
              <FontAwesome name="star" size={10} color={COLORS.YELLOW} />
              <Text style={styles.average_text}>{data.vote_average}</Text>
            </View>
          </View>

          <View style={styles.genres}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {data.genres.map(genre => (
                <Text style={styles.genre_name} key={genre.id}>{genre.name}</Text>
              ))}
            </ScrollView>
          </View>

          <View style={styles.row}>
            <Text style={styles.duration}>
              {data.type === "movie" ?
                `${data.duration} minutos` :
                `${data.duration} ${data.duration < 2 ? "temporada" : "temporadas"}`}
            </Text>

            {data.type === "movie" ? (
              <View style={styles.media}>
                <Ionicons name="film-outline" size={10} color={COLORS.WHITE} />
                <Text style={styles.media_text}>Filme</Text>
              </View>
            ) : (
              <View style={styles.media}>
                <Ionicons name="ios-tv-outline" size={10} color={COLORS.WHITE} />
                <Text style={styles.media_text}>Série</Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </View>
  );
}