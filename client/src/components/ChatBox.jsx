import { forwardRef } from "react"
import Message from "./Message"
import TypingIndicator from "./TypingIndicator"


const ChatBox = forwardRef(({ messages, isTyping }, ref) => {
  return (
    <div
      ref={ref}
      className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-yellow-50 to-stone-50"
      style={{ backgroundColor: "#DCD0A8", backgroundImage: "linear-gradient(to bottom, #DCD0A8, #f5f5dc)" }}
    >
      <div className="max-w-4xl mx-auto">
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
        {isTyping && <TypingIndicator />}
      </div>
    </div>
  )
})

ChatBox.displayName = "ChatBox"

export default ChatBox
