import { StatusBar } from "expo-status-bar";
import { ReactNode } from "react";
import { ScrollView, View } from "react-native";
import { Header } from "../Header";
import { Navbar } from "../Navbar";
import { Summary } from "../Summary";
import { styles } from "./styles";

interface Props {
  children: ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <ScrollView>
        <Header />

        {children}
      </ScrollView>

      <Summary />
      <Navbar />
    </View>
  );
}