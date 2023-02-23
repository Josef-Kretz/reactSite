const Home = () => {

    return <>
        <main id="about-me" className="self-plug">
            <section className="main-bio">
                <img src={require('./assets/pfp.jpg')} alt="Photo of Josef Kretz, a Web Developer" />
                <p className="border-gradient">I have a strong passion for using technology to develop unique and creative solutions. I use my skills as a software engineer to empower people and create value for their business. I started my career in the trades, operating and programming computer controlled machinery. I really loved working with computers and technology, so I studied software engineering to make it a larger part of my life. I have extensive knowledge in Frontend and Backend development, with proficiency in HTML, CSS, JavaScript, Node.js, and MongoDB.</p>
            </section>
        </main>
        <section id="portfolio" className="dope-projs">
            <a href="drumkit.html"><img src={require('./assets/portfolio/drumkit.jpg')} alt="Drumkit Site Snapshot" /></a>
            <a href="simplecalculator.html"><img src={require('./assets/portfolio/simplecalculator.jpg')} alt="Simple Calculator Site Snapshot" /></a>
            <a href="horoscope.html"><img src={require('./assets/portfolio/horoscope.jpg')} alt="Horoscope Site Snapshop" /></a>
        </section>
    </>
}

export default Home