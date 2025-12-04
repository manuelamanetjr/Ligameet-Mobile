import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

type CardProps = {
  title: string;
  description: string;
  image: any; // require('../assets/event1.jpg')
  date?: string;
};

export default function Card({ title, description, image, date }: CardProps) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        {date && <Text style={styles.date}>{date}</Text>}
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 150,
  },
  content: {
    padding: 15,
  },
  title: { fontSize: 18, fontWeight: "bold" },
  date: { color: "#007aff", marginTop: 5, fontWeight: "600" },
  description: { marginTop: 8, fontSize: 14, color: "#555" },
});
