import { motion } from "framer-motion";

interface Props {
  text: string;
  desc: string;
  className?: string;
}

export const ComboText = ({ text, desc, className }: Props) => {
  return (
    <motion.div className={`${className} gap-4 items-center  flex flex-col`}>
      <motion.p
        initial={{ scale: 3 }}
        animate={{ scale: 1.2, transition: { duration: 0.3 } }}
        className="font-bold text-8xl  w-fit leading-none relative"
      >
        {text}
        <span className="absolute animate-ping top-0 left-0 leading-none">
          {text}
        </span>
      </motion.p>

      <p className="text-3xl font-bold inline-block">{desc}</p>
    </motion.div>
  );
};
