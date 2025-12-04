import React from "react";
import { View, FlatList } from "react-native";
import ChatItem from "../components/ChatItem";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ChatStackParamList } from "../navigation/ChatStack";
import { useNavigation } from "@react-navigation/native";

type ChatScreenNavigationProp = NativeStackNavigationProp<ChatStackParamList, "ChatList">;

const chats = [
  { chatId: "1", chatName: "Alice", lastMessage: "See you at the game!", isGroup: false, avatar: require("../assets/avatar1.jpg") },
  { chatId: "2", chatName: "Team Volleyball", lastMessage: "Practice at 6pm", isGroup: true, avatar: require("../assets/team1.png") },
  { chatId: "3", chatName: "Bob", lastMessage: "Good match yesterday!", isGroup: false, avatar: require("../assets/avatar2.jpg") },
];

export default function ChatScreen() {
  const navigation = useNavigation<ChatScreenNavigationProp>();

  return (
    <View style={{ flex: 1, backgroundColor: "#f2f2f2" }}>
      <FlatList
        data={chats}
        keyExtractor={(item) => item.chatId}
        renderItem={({ item }) => (
          <ChatItem
            chatId={item.chatId}
            chatName={item.chatName}
            lastMessage={item.lastMessage}
            isGroup={item.isGroup}
            avatar={item.avatar}
            onPress={() => navigation.navigate("ChatDetail", { chatId: item.chatId, chatName: item.chatName })}
          />
        )}
      />
    </View>
  );
}
