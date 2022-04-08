import { ActivityIndicator, FlatList, ScrollView, Text, View } from "react-native";
import { COLORS } from "../../theme";
import { TMDBItem } from "../../types";
import { CardItem } from "../CardItem";
import { styles } from "./styles";

interface Props {
  title: string;
  data: Array<TMDBItem>;
  display?: "vertical" | "horizontal";
  isLoading?: boolean;
  showHowManyPages?: boolean;
  currentPage?: number;
  numberPages?: number;
}

export function CardList({ title, data, display = "horizontal", isLoading, showHowManyPages = false, currentPage, numberPages }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>

      {showHowManyPages && (
        <Text style={styles.pages}>Página {currentPage} de {numberPages}</Text>
      )}

      {isLoading ? <ActivityIndicator size="large" color={COLORS.DARK_SECONDARY} /> : (
        <ScrollView horizontal={display === "horizontal" ? false : true}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            width: "100%"
          }}
        >
          <FlatList
            horizontal={display === "horizontal" ? true : false}
            data={data}
            renderItem={({ item }) => <CardItem data={item} display={display} key={item.id} />}
            keyExtractor={item => item.id.toString()}
            showsHorizontalScrollIndicator={false}
          />
        </ScrollView>
      )}
    </View>
  );
}