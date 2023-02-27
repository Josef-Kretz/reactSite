import PortCard from './components/PortCard'
import portfolioList from './components/portfolioList'

const Home = () => {

    return <>
        <main id="about-me" className="self-plug">
            <section className="main-bio">
                <img src={require('./assets/pfp.jpg')} alt="Photo of Josef Kretz, a Web Developer" />
                <p className="border-gradient">I have a strong passion for using technology to develop unique and creative solutions. I use my skills as a software engineer to empower people and create value for their business. I started my career in the trades, operating and programming computer controlled machinery. I really loved working with computers and technology, so I studied software engineering to make it a larger part of my life. I have extensive knowledge in Frontend and Backend development, with proficiency in HTML, CSS, JavaScript, React, Node.js, and MongoDB.</p>
            </section>
        </main>
        <section id="portfolio" className="dope-projs">
            {portfolioList.map(port => <PortCard key={port.link} {...port} />)}
        </section>
    </>
}

export default Home