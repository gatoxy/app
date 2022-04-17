import { ActivityIndicator, FlatList, ScrollView, Text, View } from "react-native";
import { COLORS } from "../../theme";
import { Media } from "../../types";
import { ListCard } from "./components/ListCard";
import { styles } from "./styles";

interface Props {
  data: Array<Media>;
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
        <ScrollView
          horizontal={true}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            width: "100%"
          }}
        >
          <FlatList
            horizontal={false}
            data={data}
            renderItem={({ item }) => <ListCard key={item.id} data={item} />}
            keyExtractor={item => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{
              marginVertical: 8,
            }} />}
          />
        </ScrollView>
      )}
    </View>
  );
}