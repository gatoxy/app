import { FlatList, Text, View } from "react-native";
import { GenreType } from "../../types";
import { styles } from "./styles";

interface Props {
  data: Array<GenreType>;
  limit?: number;
  textAlign?: "center",
}

export function Genres({ data, limit = data?.length, textAlign = undefined }: Props) {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={[textAlign === "center" && styles.center]}
        horizontal={true}
        data={data}
        renderItem={({ item, index }) => index < limit ? <Text style={styles.text}>{item.name}</Text> : null}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{
          marginHorizontal: 6,
        }} />}
      />
    </View>
  );
}