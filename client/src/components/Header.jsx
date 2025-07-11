import { motion } from "framer-motion"

const Header = () => {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className=" w-full text-white p-4 shadow-lg bg-[#DCD0A8] flex items-center justify-center"
      
    >
      <div className="md:w-[80%] w-full rounded-full flex items-center justify-center py-2 flex-col bg-gradient-to-r from-teal-600 to-teal-700 ">
        <h1 className="text-2xl font-bold text-center">⚡ Echo Mind</h1>
        <p className="text-center text-teal-100 text-sm mt-1">A voice that mirrors your mind</p>
      </div>
    </motion.header>
  )
}

export default Header
