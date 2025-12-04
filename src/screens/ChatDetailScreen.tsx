import React from "react";
import { View, FlatList, TextInput, StyleSheet } from "react-native";
import ChatBubble from "../components/ChatBubble";
import { RouteProp } from "@react-navigation/native";
import { ChatStackParamList } from "../navigation/ChatStack";

type ChatDetailRouteProp = RouteProp<ChatStackParamList, "ChatDetail">;

type Props = { route: ChatDetailRouteProp };

const mockMessages = [
  { id: "1", message: "Hi!", isMe: false },
  { id: "2", message: "Hello!", isMe: true },
  { id: "3", message: "Ready for the match?", isMe: false },
];

export default function ChatDetailScreen({ route }: Props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={mockMessages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ChatBubble message={item.message} isMe={item.isMe} />}
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
