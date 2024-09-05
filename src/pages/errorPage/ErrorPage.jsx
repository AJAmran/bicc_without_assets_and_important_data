import { motion } from "framer-motion";
import { AiOutlineWarning } from "react-icons/ai";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-red-500 to-orange-400 text-white px-4"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex items-center justify-center bg-white text-red-500 rounded-full w-20 h-20 mb-8 shadow-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <AiOutlineWarning className="text-4xl" />
      </motion.div>
      <motion.h1
        className="text-6xl font-extrabold mb-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        404
      </motion.h1>
      <motion.h2
        className="text-3xl font-semibold mb-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Page Not Found
      </motion.h2>
      <motion.p
        className="text-lg mb-8 text-center max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </motion.p>
      <Link
        to="/"
        className="bg-white text-red-500 font-bold px-6 py-3 rounded-md shadow-md hover:bg-gray-200 transition duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        Return to Home Page
      </Link>
      <motion.div
        className="absolute bottom-0 left-0 right-0 text-center text-gray-200 py-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <p>&copy; {new Date().getFullYear()} Bangabandhu International Conference Center</p>
      </motion.div>
    </motion.div>
  );
};

export default ErrorPage;
