import { FlatList, Text, View } from "react-native";
import { MediaType } from "../../types";
import { CarouselCard } from "./components/CarouselCard";
import { styles } from "./styles";

interface Props {
  title: string;
  data: Array<MediaType>;
  small?: boolean;
}

export function Carousel({ title, data, small = false }: Props) {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, small && styles.title_small]}>{title}</Text>

      <FlatList
        horizontal={true}
        data={data}
        renderItem={({ item }) => <CarouselCard key={item.id} data={item} small={small} />}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{
          marginHorizontal: 6,
        }} />}
      />
    </View>
  );
}