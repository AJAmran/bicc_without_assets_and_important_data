import { motion } from "framer-motion";
import { ImSpinner3 } from "react-icons/im";

const TinyLoder = () => {
  return (
    <div className="flex flex-col container mx-auto items-center justify-center min-h-screen bg-background space-y-4">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="text-text text-4xl"
      >
        <ImSpinner3 />
      </motion.div>
    </div>
  );
};

export default TinyLoder;
