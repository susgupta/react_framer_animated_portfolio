import { useRef } from 'react';
import './portfolio.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const items = [
    {
        id: 1,
        title: "Sushil 3D Car Demo",
        img: "/hobby_site_3.png",
        description: "Sushil 3D Car Demo Project"
    },
    {
        id: 2,
        title: "Sushil SeaSide Vacation Site",
        img: "/hobby_site_1.png",
        description: "Design and front-end development project"
    },
    {
        id: 3,
        title: "Sushil Video Travel Site",
        img: "/hobby_site_2.png",
        description: "Video travel site"
    }
];

const Single = ({item})=> {

    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref,
        //offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-325, 325])

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="hobby project" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <button>See demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
};

const Portfolio = () => {

    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref, 
        offset: ["end end", "start start"]
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    })

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Hobby Projects</h1>
                <motion.div className="progressBar" style={{scaleX: scaleX}}></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Portfolio;
