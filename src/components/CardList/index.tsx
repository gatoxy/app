import { ScrollView, Text, View } from "react-native";
import { Movie, Serie } from "../../types";
import { CardItem } from "../CardItem";
import { styles } from "./styles";

interface Props {
  title: string;
  data: Movie[] | Serie[];
  media: "movie" | "serie";
}

export function CardList({ title, data, media }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>

      <ScrollView
        style={styles.cardListContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {data.map(item => (
          <CardItem
            key={item.id}
            data={item}
            media={media}
          />
        ))}
      </ScrollView>
    </View>
  );
}