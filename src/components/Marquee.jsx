import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div className="relative overflow-hidden bg-[#021526] py-12">
      <motion.div
        className="flex space-x-6 text-white text-2xl font-light w-max"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
      >
        {/* Content Group 1 */}
        <div className="flex space-x-6">
          <div className="flex flex-col items-center space-y-2 min-w-[300px]">
            <p className="font-bold">UI/UX</p>
            <p className="text-center text-lg max-w-[20ch] font-light">
              I create compelling user interface and experience
            </p>
          </div>

          <div className="flex flex-col items-center space-y-2 min-w-[300px]">
            <p className="font-bold">Frontend</p>
            <p className="text-center text-lg max-w-[20ch] font-light">
              Responsive applications across mobile and web apps
            </p>
          </div>

          <div className="flex flex-col items-center space-y-2 min-w-[300px]">
            <p className="font-bold">Problem Solving</p>
            <p className="text-center text-lg max-w-[20ch] font-light">
              Turning challenges into elegant solutions
            </p>
          </div>

        </div>

        {/* Content Group 2 (duplicate for seamless loop) */}
        <div className="flex space-x-6">
          <div className="flex flex-col items-center space-y-2 min-w-[300px]">
            <p className="font-bold">UI/UX</p>
            <p className="text-center text-lg max-w-[20ch] font-light">
              I create compelling user interface and experience
            </p>
          </div>

          <div className="flex flex-col items-center space-y-2 min-w-[300px]">
            <p className="font-bold">Frontend</p>
            <p className="text-center text-lg max-w-[20ch] font-light">
              Responsive applications across mobile and web apps
            </p>
          </div>

          <div className="flex flex-col items-center space-y-2 min-w-[300px]">
            <p className="font-bold">Problem Solving</p>
            <p className="text-center text-lg max-w-[30ch] font-light">
              Turning challenges into elegant solutions
            </p>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default Marquee;
