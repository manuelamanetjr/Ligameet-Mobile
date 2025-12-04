import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import Card from "../components/Card";

const events = [
  { id: "1", title: "City Volleyball Championship 2025", description: "City Cup 2025", image: require("../assets/volleyball_event.jpg"), date: "Dec 10, 2025" },
  { id: "2", title: "Summer Basketball League 2025", description: "Summer League 2025", image: require("../assets/basketball_event.jpg"), date: "Jan 15, 2025" },
  { id: "3", title: "Regional Volleyball Open 2025", description: "City Cup 2025", image: require("../assets/volleyball_event.jpg"), date: "Dec 10, 2025" },
  { id: "4", title: "City Basketball Showdown 2025", description: "Summer League 2025", image: require("../assets/basketball_event.jpg"), date: "Jan 15, 2025" },
  { id: "5", title: "Youth Volleyball Cup 2025", description: "City Cup 2025", image: require("../assets/volleyball_event.jpg"), date: "Dec 10, 2025" },
  { id: "6", title: "Pro Basketball Invitational 2025", description: "Summer League 2025", image: require("../assets/basketball_event.jpg"), date: "Jan 15, 2025" },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Upcoming Events</Text>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card title={item.title} description={item.description} image={item.image} date={item.date} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f2f2f2" },
  header: { fontSize: 24, fontWeight: "bold", margin: 16 },
});
