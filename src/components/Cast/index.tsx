import { FlatList, Image, Text, View } from "react-native";
import { CastType } from "../../types";
import { styles } from "./styles";

import DefaultImage from "../../assets/poster-default.png";
const DEFAULT_IMAGE = Image.resolveAssetSource(DefaultImage).uri;

interface Props {
  data: Array<CastType>;
}

export function Cast({ data }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Elenco</Text>

      <FlatList
        horizontal={true}
        data={data}
        renderItem={({ item }) => <Image
          style={styles.image}
          source={{
            uri: item.profile_path ? `https://image.tmdb.org/t/p/w500/${item.profile_path}` : DEFAULT_IMAGE,
          }}
        />}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{
          marginHorizontal: 6,
        }} />}
      />
    </View>
  );
}