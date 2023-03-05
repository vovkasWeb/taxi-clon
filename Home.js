/** @format */

import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  return (
    <View style={styles.container}>
      {/* <Text>Welcom Home!</Text> */}
      <StatusBar style="auto" />

      <Image
        style={styles.Logo}
        source={require("./photo16774996400000.jpg")}
      />
      <SafeAreaView style={styles.div}>
        <TextInput
          style={styles.input}
          placeholder="Oт куда едим?"
        />
        <TextInput
          style={styles.input}
          placeholder="Куда направляемся?"
          keyboardType="numeric"
        />
      </SafeAreaView>
      <View style={styles.line}>
        <Button
          color="#f194ff"
          title="Для ЗСY"
        />
        <Button
          color="#f194ff"
          title="МедАвто"
        />
      </View>
      <Text style={styles.text}>Добавить адерес "Дома"</Text>
      <Text style={styles.text}>Добавить адерес "Paбота"</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  Logo: {
    width: "100%",
    height: 450,
  },
  div: {
    paddingTop: 30,
  },
  input: {
    height: 50,
    borderWidth: 1,
    width: 350,
    padding: 10,
  },
  line: {
    margin: 10,
    flexDirection: "row",
  },
  btn: {
    color: "#737373",
  },
  text: {
    fontSize: 18,
    margin: 5,
	 marginBottom: 10,
    paddingBottom: 5,
    borderBottomWidth: 1,
    paddingLeft: 50,
    paddingRight: 50,
  },
});
