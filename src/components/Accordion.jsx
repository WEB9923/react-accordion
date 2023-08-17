import {HiOutlineChevronDown} from "react-icons/hi";
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

export default function Accordion(props) {
   const {question, answer} = props;
   const [show, setShow] = useState(false);
   const handleToggleShow = () => setShow(!show);
   return (
      <>
         <div
            onClick={handleToggleShow}
            className="bg-slate-700 my-2 px-3 py-2 rounded-md cursor-pointer select-none"
         >
            <div className={`${show && "text-teal-500"} font-bold text-xl text-slate-500 gap-x-1 py-1 mb-2 flex items-center justify-between`}>
               <h2>{question}</h2>
               <span className={`${show && "transition-all duration-500 rotate-180"}`}>
                  <HiOutlineChevronDown size={23}/>
               </span>
            </div>
            <AnimatePresence>
               {show && (<motion.div
                  initial={{
                     height: 0
               }} animate={{
                     height: "auto"
               }} exit={{
                     height: 0
               }} transition={{
                  duration: 0.4,
                  type:"tween",
               }}
                  className="text-[16px] text-slate-500 font-medium overflow-clip"
               >
                  {answer}
               </motion.div>)}
            </AnimatePresence>
         </div>
      </>
   );
}