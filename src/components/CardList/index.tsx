import { ActivityIndicator, FlatList, ScrollView, Text, View } from "react-native";
import { COLORS } from "../../theme";
import { TMDBItem } from "../../types";
import { CardItem } from "../CardItem";
import { styles } from "./styles";

interface Props {
  title: string;
  data: Array<TMDBItem>;
  display?: "vertical" | "horizontal";
  isLoading: boolean;
  currentPage?: number,
  numberPages?: number,
}

export function CardList({ title, data, display = "horizontal", isLoading, currentPage, numberPages }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>

      {/* { currentPage && <Text style={styles.pages}>Página {currentPage} de {numberPages}</Text> } */}

      {isLoading ? <ActivityIndicator size="large" color={COLORS.DARK_SECONDARY} /> : (
        <FlatList
          horizontal={display === "horizontal" ? true : false}
          data={data}
          renderItem={({ item }) => <CardItem data={item} display={display} key={item.id} />}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
  );
}