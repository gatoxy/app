import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import { DetailsType } from "../../types";
import { MediaIcon } from "../MediaIcon";
import { Average } from "../Average";
import { Genres } from "../Genres";

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
            <Average vote_average={data.vote_average} />
          </View>

          <Genres data={data.genres} />

          <View style={styles.row}>
            <Text style={styles.duration}>
              {data.type === "movie" ?
                `${data.duration} minutos` :
                `${data.duration} ${data.duration < 2 ? "temporada" : "temporadas"}`}
            </Text>

            <MediaIcon type={data.type} />
          </View>
        </View>
      </View>
    </View>
  );
}