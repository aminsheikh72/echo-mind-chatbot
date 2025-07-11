import { motion } from "framer-motion"

const Message = ({ message }) => {
  const isUser = message.sender === "user"

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
      className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}
    >
      <div
        className={`flex items-start space-x-2 max-w-xs sm:max-w-md lg:max-w-lg ${isUser ? "flex-row-reverse space-x-reverse" : ""}`}
      >
        {/* Avatar */}
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold ${
            isUser ? "bg-gray-500" : "bg-teal-600"
          }`}
          style={isUser ? {} : { backgroundColor: "#4A9782" }}
        >
          {isUser ? "👤" : "🤖"}
        </div>

        {/* Message bubble */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className={`px-4 py-3 rounded-2xl shadow-md ${
            isUser ? "bg-white text-gray-800 rounded-tr-sm" : "text-white rounded-tl-sm"
          }`}
          style={isUser ? {} : { backgroundColor: "#4A9782" }}
        >
          <p className="text-sm leading-relaxed">{message.text}</p>
          <p className={`text-xs mt-1 ${isUser ? "text-gray-500" : "text-teal-100"}`}>
            {message?.timestamp?.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Message
