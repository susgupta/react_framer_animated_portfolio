import { useRef } from 'react';
import './contact.scss';
import { motion, inView } from 'framer-motion';

const variants = {
    initial: {
        y: 500,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1
        }
    }
};

const Contact = () => {

    const ref = useRef();

    const isInView = inView(ref, { margin: "-100px"})

    return (
        <motion.div 
            className="contact" 
            ref={ref}
            variants={variants} 
            initial="initial" 
            whileInView="animate"
        >
            <motion.div className="textContainer" variants={variants}>

                <motion.h1 variants={variants}>Let's work together</motion.h1>

                <motion.div className="item" variants={variants}>
                    <h2>Mail</h2>
                    <span>guptask.7@gmail.com</span>
                </motion.div>

                <motion.div className="item" variants={variants}>
                    <h2>Location</h2>
                    <span>Ontario, Canada</span>
                </motion.div>

                <motion.div className="item" variants={variants}>
                    <h2>Github Repo</h2>
                    <span>github.com/susgupta</span>
                </motion.div>

            </motion.div>
            <div className="formContainer">

                <motion.div 
                    className="contactSvg" 
                    initial={{opacity: 1}} 
                    whileInView={{opacity: 0}}
                    transition={{delay: 3, duration: 1}}
                >
                    <svg fill="none" width="450px" height="450px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                        <motion.path 
                            strokeWidth={5}
                            initial={{pathLength: 0}}
                            animate={isInView && {pathLength: 1}}
                            transition={{duration: 3}}
                            d="M0 1694.235h1920V226H0v1468.235ZM112.941 376.664V338.94H1807.06v37.723L960 1111.233l-847.059-734.57ZM1807.06 526.198v950.513l-351.134-438.89-88.32 70.475 378.353 472.998H174.042l378.353-472.998-88.32-70.475-351.134 438.89V526.198L960 1260.768l847.059-734.57Z" 
                            fill-rule="evenodd"
                        />
                    </svg>
                </motion.div>

                <motion.form
                    initial={{opacity: 0}} 
                    whileInView={{opacity: 1}}
                    transition={{delay: 4, duration: 1}}
                >
                    <input type="text" required placeholder="Name" />
                    <input type="email" required placeholder="Email" />
                    <textarea rows={8} placeholder="message" />
                    <button>Submit</button>
                </motion.form>
            </div>
        </motion.div>
    )
}

export default Contact