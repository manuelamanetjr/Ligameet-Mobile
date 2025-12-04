import React from "react";
import { View, ScrollView, StyleSheet, Text, Image } from "react-native";
import ProfileItem from "../components/ProfileItem";

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../assets/avatar3.jpg")} style={styles.avatar} />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.sport}>Volleyball Player</Text>
      </View>
      <View style={styles.infoContainer}>
        <ProfileItem label="Email" value="johndoe@example.com" />
        <ProfileItem label="Team" value="City Volleyball Club" />
        <ProfileItem label="Joined" value="March 2023" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f2f2f2" },
  header: { alignItems: "center", padding: 20, backgroundColor: "#007aff" },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 10, borderWidth: 3, borderColor: "#fff" },
  name: { fontSize: 22, fontWeight: "bold", color: "#fff" },
  sport: { fontSize: 16, color: "#fff", marginTop: 4 },
  infoContainer: { marginTop: 20 },
});
