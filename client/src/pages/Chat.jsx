import React, { useState, useRef, useEffect } from "react";
import ChatBox from './../components/ChatBox';
import Header from './../components/Header';
import InputBox from './../components/InputBox';

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm Bolt AI. How can I help you today?", sender: "ai" },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatBoxRef = useRef(null);

  const handleSendMessage = async (text) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg = { id: Date.now(), text, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    try {
      const res = await fetch("https://echo-mind-chatbot-backend.onrender.com/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();

      // Add AI reply
      const aiMsg = { id: Date.now() + 1, text: data.reply, sender: "ai" };
      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      const fallback = { id: Date.now() + 1, text: "Sorry, AI is not responding.", sender: "ai" };
      setMessages((prev) => [...prev, fallback]);
    } finally {
      setIsTyping(false);
    }
  };

  // Auto scroll to bottom
  useEffect(() => {
    chatBoxRef.current?.scrollTo({ top: chatBoxRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header />
      <ChatBox messages={messages} isTyping={isTyping} ref={chatBoxRef} />
      <InputBox onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Chat;
