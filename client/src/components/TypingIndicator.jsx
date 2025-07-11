import { motion } from "framer-motion"

const TypingIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex justify-start mb-4"
    >
      <div className="flex items-start space-x-2 max-w-xs">
        {/* AI Avatar */}
        <div
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold"
          style={{ backgroundColor: "#4A9782" }}
        >
          🤖
        </div>

        {/* Typing bubble */}
        <div
          className="px-4 py-3 rounded-2xl rounded-tl-sm text-white shadow-md"
          style={{ backgroundColor: "#4A9782" }}
        >
          <div className="flex space-x-1">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
              className="w-2 h-2 bg-teal-200 rounded-full"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
              className="w-2 h-2 bg-teal-200 rounded-full"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0.4 }}
              className="w-2 h-2 bg-teal-200 rounded-full"
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default TypingIndicator
