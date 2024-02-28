import { useRef } from 'react';
import './portfolio.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const items = [
    {
        id: 1,
        title: "Sushil 3D Car Demo",
        img: "hobby_site_3.png",
        description: "This a demo using React, Three JS and React Three Fiber to have a 3D style car show demo site.  This is an interactive demo to produce an effect of moving car in 3D space. In addition PostProcessing is used to produce cool after effects for the animation.",
        isVideo: true,
        video: "3d_car_demo_project_export.mp4",
        demo_link: "https://susgupta.github.io/3d_car_show/"
    },
    {
        id: 2,
        title: "Sushil SeaSide Vacation Site",
        img: "hobby_site_1.png",
        description: "This is a responsive design exercise to create a fake travel/beach themed site. Using media queries to cover break point design. Same with site navigation for media queries.",
        isVideo: false,
        video: "",
        demo_link: "https://susgupta.github.io/responsive_travel_site/index.html"
    },
    {
        id: 3,
        title: "Sushil Video Travel Site",
        img: "hobby_site_2.png",
        description: "This is just a basic design exercise for landing page with video looping style background.  This one adds mutiple video 'slides' and a different overlay technique.  The trick used was to load all videos and leverage javascript to toggle active CSS states.  ",
        isVideo: false,
        video: "",
        demo_link: "https://susgupta.github.io/html_video_responsive_site/index.html"
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
                        {item.isVideo ? (
                            <video autoPlay muted loop src={item.video} />
                        ) : (
                            <img src={item.img} alt="hobby project" />
                        )}
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <a target="_blank" rel="noopener noreferrer" href={item.demo_link}>
                            <button>See demo</button>
                        </a>
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
