import { useRef } from 'react';
import './services.scss';
import { motion, useInView } from 'framer-motion';

const variants = {
    inital: {
        x: -500,
        y: 100,
        opacity: 0
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    }
};

const Services = () => {

    const ref = useRef();

    const isInView = useInView(ref, {margin: "-100px"})

    return (
        <motion.div className='services' 
            variants={variants} 
            initial="inital" 
            //whileInView="animate"
            ref={ref}
            //animate={isInView && "animate"}
            whileInView={"animate"}

        >

            <div className="textContainer" variants={variants}>
                <p>Developing and creating beautiful <br /> interactive user interfaces is my passion.</p>
                <hr />
            </div>

            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt="title image" />
                    <h1>
                        <motion.b whileHover={{color: "orange"}}>Unique </motion.b> 
                        Ideas
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{color: "orange"}}>For Your </motion.b> 
                        Creative Needs
                    </h1>
                    <button>What I Do</button>
                </div>
            </motion.div>

            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                    <h2>Design</h2>
                    <p>I love to create and design user interfaces.  UI/UX design is my career and passion as well.</p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                    <h2>Design</h2>
                    <p>I love to create and design user interfaces.  UI/UX design is my career and passion as well.</p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                    <h2>Design</h2>
                    <p>I love to create and design user interfaces.  UI/UX design is my career and passion as well.</p>
                    <button>Go</button>
                </motion.div>
            </motion.div>

        </motion.div>
  )
}

export default Services