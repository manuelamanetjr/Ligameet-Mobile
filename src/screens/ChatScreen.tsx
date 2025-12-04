import React from "react";
import { View, FlatList, StyleSheet, TextInput } from "react-native";
import ChatBubble from "../components/ChatBubble";

const messages = [
  { id: "1", message: "Hi there!", isMe: false, avatar: require("../assets/avatar.jpg"), timestamp: "10:00 AM" },
  { id: "2", message: "Hello! How's your team?", isMe: true, timestamp: "10:01 AM" },
  { id: "3", message: "Going great, ready for the match.", isMe: false, avatar: require("../assets/avatar.jpg"), timestamp: "10:02 AM" },
];

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ChatBubble message={item.message} isMe={item.isMe} avatar={item.avatar} timestamp={item.timestamp} />
        )}
        contentContainerStyle={{ padding: 16 }}
      />
      <TextInput style={styles.input} placeholder="Type a message..." />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f2f2f2" },
  input: {
    height: 50,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
});
