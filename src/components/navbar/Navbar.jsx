import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import {motion} from 'framer-motion';

function Navbar() {
  return (
    <div className="navbar">
        <Sidebar />
        <div className="wrapper">
            <motion.span 
              initial={{opacity: 0, scale: 0.5}}
              animate={{opacity: 1, scale: 1}}
              transition={{duration: 0.5}}
            >
                Sushil Gupta Design
            </motion.span>
            <div className="social">
                <a href="#"><img src="/facebook.png" alt="facebook link" /></a>
                <a href="#"><img src="/instagram.png" alt="instagram link" /></a>
                <a href="#"><img src="/youtube.png" alt="youtube link" /></a>
                <a href="#"><img src="/dribbble.png" alt="dribbble link" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar