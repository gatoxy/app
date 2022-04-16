import { ActivityIndicator, FlatList, SafeAreaView, ScrollView, Text, View } from "react-native";
import { COLORS } from "../../theme";
import { Movie } from "../../types";
import { MovieCard } from "./components/MovieCard";
import { styles } from "./styles";

interface Props {
  data: Array<Movie>;
  title: string;
  loading: boolean;
  currentPage: number;
  numberPages: number;
}

export function List({ data, title, loading, currentPage, numberPages }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>Página {currentPage} de {numberPages}</Text>
      {loading ? (
        <ActivityIndicator size="small" color={COLORS.DARK_SECONDARY} />
      ) : (
        <FlatList
          horizontal={false}
          data={data}
          renderItem={({ item }) => <MovieCard key={item.id} data={item} />}
          keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{
            marginVertical: 8,
          }} />}
        />
      )}
    </View>
  );
}