import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const dayThemes = {
    day1: {
        name: "Day 01",
        subName: "AWAKENING",
        color: "#ffb7c5",
        bg: "rgba(255, 183, 197, 0.05)",
        kanji: "覚醒"
    },
    day2: {
        name: "Day 02",
        subName: "ASCENSION",
        color: "#ffffff",
        bg: "rgba(255, 255, 255, 0.05)",
        kanji: "上昇"
    },
    day3: {
        name: "Day 03",
        subName: "LEGACY",
        color: "#ff0000",
        bg: "rgba(255, 0, 0, 0.05)",
        kanji: "遺産"
    }
};

const DayEvents = () => {
    const { dayId } = useParams<{ dayId: string }>();
    const currentDay = dayId as keyof typeof dayThemes || 'day1';
    const theme = dayThemes[currentDay] || dayThemes.day1;

    // 5 placeholders for now
    const placeholders = [
        { title: "Epic Showdown", category: "Music", time: "10:00 AM", location: "Grand Stadium" },
        { title: "Mystic Dance", category: "Dance", time: "12:00 PM", location: "Open Air Theatre" },
        { title: "Zen Workshop", category: "Culture", time: "02:00 PM", location: "Kamon Hall" },
        { title: "Shadow Play", category: "Drama", time: "04:00 PM", location: "Main Auditorium" },
        { title: "Final Battle", category: "Gaming", time: "06:00 PM", location: "Esports Arena" },
    ];

    return (
        <section className="day-events-page" style={{ paddingTop: '150px', minHeight: '100vh', background: '#050505' }}>
            <div className="container">
                <div className="back-link" style={{ marginBottom: '2rem' }}>
                    <Link to="/events" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', letterSpacing: '2px' }}>
                        <i className="fas fa-arrow-left"></i> BACK TO DOMAINS
                    </Link>
                </div>

                <div className="day-hero" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span className="day-kanji" style={{ fontSize: '5rem', color: theme.color, opacity: 0.1, position: 'absolute', top: '100px', left: '50%', transform: 'translateX(-50%)', fontWeight: 900, pointerEvents: 'none' }}>
                        {theme.kanji}
                    </span>
                    <h2 style={{ color: theme.color, fontSize: '0.9rem', letterSpacing: '5px', marginBottom: '0.5rem' }}>{theme.name}</h2>
                    <h1 style={{ color: 'white', fontSize: '3.5rem', fontWeight: 900, letterSpacing: '2px' }}>{theme.subName}</h1>
                </div>

                <div className="events-grid">
                    {placeholders.map((event, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="event-placeholder-card"
                            style={{
                                background: 'rgba(255,255,255,0.02)',
                                border: `1px solid rgba(255,255,255,0.05)`,
                                borderTop: `4px solid ${theme.color}`,
                                borderRadius: '12px',
                                padding: '2rem',
                                position: 'relative',
                                overflow: 'hidden',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <div style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '0.6rem', color: theme.color, opacity: 0.5, letterSpacing: '2px' }}>
                                #{i + 1}
                            </div>
                            <span style={{ fontSize: '0.7rem', color: theme.color, fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase' }}>{event.category}</span>
                            <h3 style={{ color: 'white', fontSize: '1.4rem', margin: '1rem 0 0.5rem', fontWeight: 800 }}>{event.title}</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1.5rem', color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>
                                <span><i className="far fa-clock"></i> {event.time}</span>
                                <span><i className="fas fa-map-marker-alt"></i> {event.location}</span>
                            </div>
                            <button style={{
                                width: '100%',
                                marginTop: '2rem',
                                padding: '0.8rem',
                                background: 'transparent',
                                border: `1px solid ${theme.color}`,
                                color: theme.color,
                                borderRadius: '6px',
                                fontSize: '0.75rem',
                                fontWeight: 800,
                                letterSpacing: '1px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = theme.color;
                                    e.currentTarget.style.color = currentDay === 'day2' ? 'black' : 'white';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'transparent';
                                    e.currentTarget.style.color = theme.color;
                                }}>
                                REGISTER NOW
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>
                {`
                    .events-grid {
                        display: grid;
                        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                        gap: 2rem;
                    }

                    @media (max-width: 768px) {
                        .events-grid {
                            grid-template-columns: 1fr !important;
                            padding: 0 1rem;
                        }
                        .day-hero h1 {
                            font-size: 2.5rem !important;
                        }
                    }

                    .event-placeholder-card:hover {
                        transform: translateY(-5px);
                        background: rgba(255,255,255,0.04) !important;
                        border-color: ${theme.color} !important;
                    }
                `}
            </style>
        </section>
    );
};

export default DayEvents;
