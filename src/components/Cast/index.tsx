import { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { getCredits } from "../../hooks/useFetch";
import { CastType } from "../../types";
import { Loading } from "../Loading";
import { styles } from "./styles";

import DefaultImage from "../../assets/poster-default.png";
const DEFAULT_IMAGE = Image.resolveAssetSource(DefaultImage).uri;

interface Props {
  type: string;
  id: number;
}

export function Cast({ type, id }: Props) {
  const [cast, setCast] = useState<CastType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getCredits(type, id).then(response => {
      setCast(response);
      setLoading(false);
    });
  }, [id]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Elenco</Text>

      {loading ? <Loading /> : (
        <FlatList
          horizontal={true}
          data={cast}
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
      )}
    </View>
  );
}