import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MovieGallery from '@/components/MovieGallery';



const Home = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const targetDate = new Date('2026-03-15T00:00:00');

        const updateTimer = () => {
            const now = new Date().getTime();
            const distance = targetDate.getTime() - now;

            if (distance < 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        };

        updateTimer();
        const timer = setInterval(updateTimer, 1000);

        const observerOptions = { threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('section').forEach(section => {
            section.classList.add('reveal');
            observer.observe(section);
        });

        return () => {
            observer.disconnect();
            clearInterval(timer);
        };
    }, []);

    return (
        <div className="home-page">
            {/* HERO SECTION */}
            <section id="hero" className="hero" style={{
                position: 'relative',
                overflow: 'hidden',
                background: 'linear-gradient(to bottom, rgba(5,5,5,0.7), rgba(5,5,5,0.9)), url("https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2000&auto=format&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div className="hero-content animate-fade">
                    <div className="hero-main-branding" style={{ marginBottom: '2rem' }}>
                        <h1 className="highways-26-text" data-text="HIGHWAYS'26" style={{
                            margin: '0',
                            padding: '0',
                        }}>HIGHWAYS'26</h1>
                    </div>
                    <div className="hero-info">
                        <div className="timer-grid minimalist-timer">
                            {[
                                { value: timeLeft.days, unit: 'D' },
                                { value: timeLeft.hours, unit: 'H' },
                                { value: timeLeft.minutes, unit: 'M' },
                                { value: timeLeft.seconds, unit: 'S' }
                            ].map(({ value, unit }) => (
                                <div key={unit} className="timer-segment">
                                    <span className="timer-value">
                                        {value.toString().padStart(2, '0')}
                                    </span>
                                    <span className="timer-unit">
                                        {unit}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className="date-badge">TBD</div>
                        <p className="hero-tagline">WHERE TRADITION MEETS THE FUTURE</p>
                    </div>
                    <div className="hero-btns">
                        <Link to="/events" className="btn-matsuri">Explore More</Link>
                    </div>
                </div>
            </section>

            {/* ABOUT SECTION */}
            <section id="about" className="about-section world-white" style={{ padding: '100px 0' }}>
                <div className="container">
                    <div className="about-flex">
                        <div className="about-text">
                            <h2 className="section-title left">THE SAGA BEGINS</h2>
                            <p>Highways is the annual intercollegiate cultural festival of Sri Venkateswara College of Engineering (SVCE). Known for its vibrant atmosphere and creative energy, Highways brings together students from across the states to celebrate art, talent, and expression.</p>
                            <p>This year, for <strong>Highways '26</strong>, we are pushing the boundaries of creativity. Experience a festival like never before, where every moment is a masterpiece and every event is a step into the extraordinary.</p>
                            <div className="about-highlights">
                                <div className="highlight"><i className="fas fa-bolt"></i> Pure Energy</div>
                                <div className="highlight"><i className="fas fa-palette"></i> Creative Soul</div>
                                <div className="highlight"><i className="fas fa-star"></i> Infinite Talent</div>
                            </div>
                        </div>
                        <div className="about-image-container">
                            <div className="image-frame" style={{ position: 'relative' }}>
                                <img src="https://images.unsplash.com/photo-1542332213-31f87348057f?q=80&w=1200&auto=format&fit=crop" alt="Natural Scenery" className="main-about-img" style={{ width: '100%', borderRadius: '15px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CELEBRITY GUESS SECTION */}
            <section id="celebrities" className="celebrity-section" style={{ padding: '100px 0' }}>
                <div className="container">
                    <h2 className="section-title center">CELEBRITY GUESS</h2>
                    <div className="celebrity-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginTop: '50px' }}>
                        {[
                            { id: 1, type: "ACTOR", hint: "From the blockbusters of Tamil Cinema" },
                            { id: 2, type: "SINGER", hint: "The voice that stole a million hearts" },
                            { id: 3, type: "COMEDIAN", hint: "Laughter is coming to SVCE" },
                            { id: 4, type: "GUEST", hint: "A legend in the making" }
                        ].map(celeb => (
                            <motion.div
                                key={celeb.id}
                                whileHover={{ scale: 1.05 }}
                                className="celebrity-card-premium"
                                style={{
                                    background: 'rgba(255,255,255,0.03)',
                                    borderRadius: '30px',
                                    padding: '40px 20px',
                                    textAlign: 'center',
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    cursor: 'pointer'
                                }}
                            >
                                <div className="mystery-circle" style={{
                                    width: '150px',
                                    height: '150px',
                                    margin: '0 auto 20px',
                                    background: 'rgba(255,255,255,0.05)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '4rem',
                                    fontWeight: 900,
                                    color: '#ff4d4d',
                                    textShadow: '0 0 20px rgba(255, 77, 77, 0.4)'
                                }}>?</div>
                                <span style={{ color: '#ff4d4d', fontSize: '0.7rem', fontWeight: 900, letterSpacing: '4px' }}>{celeb.type}</span>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, margin: '10px 0' }}>COMING SOON</h3>
                                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>{celeb.hint}</p>
                                <div className="reveal-btn" style={{
                                    marginTop: '20px',
                                    background: 'white',
                                    color: 'black',
                                    padding: '8px 20px',
                                    borderRadius: '50px',
                                    fontSize: '0.75rem',
                                    fontWeight: 900
                                }}>REVEAL SOON</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* GLIMPSES SECTION */}
            <MovieGallery />


            {/* GLIMPSES SECTION */}
            {/* <section id="glimpses" className="glimpses-section" style={{ padding: '100px 0' }}>
                <div className="section-header">
                    <h2 className="section-title center">PAST GLIMPSES</h2>
                </div>

                <div className="glimpses-ticker">
                    <div className="ticker-track ltr">
                        {[
                            '1.JPG', '2.webp', '3.JPG', '4.webp', '5.JPG', '6.webp', '7.JPG', '8.png', '9.png', '10.png', '11.png'
                        ].map((img, i) => (
                            <div key={i} className="glimpse-card">
                                <img src={`/assets/glimpses/${img}`} alt="Highways Moment" />
                            </div>
                        ))}
                        {[
                            '1.JPG', '2.webp', '3.JPG', '4.webp', '5.JPG', '6.webp', '7.JPG', '8.png', '9.png', '10.png', '11.png'
                        ].map((img, i) => (
                            <div key={`dup1-${i}`} className="glimpse-card">
                                <img src={`/assets/glimpses/${img}`} alt="Highways Moment" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="glimpses-ticker" style={{ marginTop: '20px' }}>
                    <div className="ticker-track rtl">
                        {[
                            '12.png', '13.png', '14.png', '15.png', '16.png', '17.png', '18.png', '19.png', '20.png', '21.png', '22.png'
                        ].map((img, i) => (
                            <div key={i} className="glimpse-card">
                                <img src={`/assets/glimpses/${img}`} alt="Highways Moment" />
                            </div>
                        ))}
                        {[
                            '12.png', '13.png', '14.png', '15.png', '16.png', '17.png', '18.png', '19.png', '20.png', '21.png', '22.png'
                        ].map((img, i) => (
                            <div key={`dup2-${i}`} className="glimpse-card">
                                <img src={`/assets/glimpses/${img}`} alt="Highways Moment" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="glimpses-ticker" style={{ marginTop: '20px' }}>
                    <div className="ticker-track ltr">
                        {[
                            '23.png', '24.png', '25.png', '26.png', '27.png', '28.png', '29.png', '30.png', '31.png', '32.png', '33.png'
                        ].map((img, i) => (
                            <div key={i} className="glimpse-card">
                                <img src={`/assets/glimpses/${img}`} alt="Highways Moment" />
                            </div>
                        ))}
                        {[
                            '23.png', '24.png', '25.png', '26.png', '27.png', '28.png', '29.png', '30.png', '31.png', '32.png', '33.png'
                        ].map((img, i) => (
                            <div key={`dup3-${i}`} className="glimpse-card">
                                <img src={`/assets/glimpses/${img}`} alt="Highways Moment" />
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}


        </div>
    );
};

export default Home;
