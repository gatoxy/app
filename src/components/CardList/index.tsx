import { ScrollView, Text, View } from "react-native";
import { CardItem } from "../CardItem";
import { styles } from "./styles";

interface Props {
  title: string;
}

export function CardList({ title }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>

      <ScrollView
        style={styles.cardListContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </ScrollView>
    </View>
  );
}