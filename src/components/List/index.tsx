import { FlatList, ScrollView, Text, View } from "react-native";
import { MediaType } from "../../types";
import { Loading } from "../Loading";
import { ListCard } from "./components/ListCard";
import { styles } from "./styles";

interface Props {
  data: Array<MediaType>;
  title: string;
  loading: boolean;
  currentPage: number;
  numberPages: number;
}

export function List({ data, title, loading, currentPage, numberPages }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      { numberPages !== 0 && <Text style={styles.subtitle}>Página {currentPage} de {numberPages}</Text> }
      {loading ? <Loading /> : (
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