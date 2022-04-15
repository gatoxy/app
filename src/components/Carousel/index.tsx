import { FlatList, Text, View } from "react-native";
import { Movie } from "../../types";
import { CarouselCard } from "./components/CarouselCard";
import { styles } from "./styles";

interface Props {
  title: string;
  data: Array<Movie>;
}

export function Carousel({ title, data }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <FlatList
        horizontal={true}
        data={data}
        renderItem={({ item }) => <CarouselCard key={item.id} data={item} />}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{
          marginHorizontal: 4,
        }} />}
      />
    </View>
  );
}