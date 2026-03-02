import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const allEvents = [
    // Day 1
    {
        id: 1,
        title: "Digital Frontier",
        category: "Tech",
        day: 1,
        time: "10:00 AM",
        location: "Hall A",
        color: "#ffb7c5",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Symphonic Echoes",
        category: "Music",
        day: 1,
        time: "12:00 PM",
        location: "Main Stage",
        color: "#ffb7c5",
        image: "https://images.unsplash.com/photo-1514525253344-a812f020cff0?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Movement Theory",
        category: "Dance",
        day: 1,
        time: "02:00 PM",
        location: "Studio 1",
        color: "#ffb7c5",
        image: "https://images.unsplash.com/photo-1547153760-18fc21fca248?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Canvas Dreams",
        category: "Art",
        day: 1,
        time: "04:00 PM",
        location: "Gallery",
        color: "#ffb7c5",
        image: "https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 5,
        title: "Strategy Nexus",
        category: "Gaming",
        day: 1,
        time: "06:00 PM",
        location: "Arena",
        color: "#ffb7c5",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop"
    },

    // Day 2
    {
        id: 6,
        title: "Sonic Waves",
        category: "Music",
        day: 2,
        time: "10:00 AM",
        location: "Main Stage",
        color: "#00d2ff",
        image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 7,
        title: "Urban Rhythms",
        category: "Dance",
        day: 2,
        time: "01:00 PM",
        location: "Plaza",
        color: "#00d2ff",
        image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 8,
        title: "Design Workshop",
        category: "Craft",
        day: 2,
        time: "03:00 PM",
        location: "Lab B",
        color: "#00d2ff",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 9,
        title: "Virtual Realm",
        category: "Gaming",
        day: 2,
        time: "05:00 PM",
        location: "Arena",
        color: "#00d2ff",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 10,
        title: "Legacy Theatre",
        category: "Drama",
        day: 2,
        time: "07:00 PM",
        location: "Auditorium",
        color: "#00d2ff",
        image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=1000&auto=format&fit=crop"
    },

    // Day 3
    {
        id: 11,
        title: "Summit Keynote",
        category: "Speech",
        day: 3,
        time: "10:00 AM",
        location: "Hall A",
        color: "#ff0000",
        image: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 12,
        title: "Evo Gaming",
        category: "Gaming",
        day: 3,
        time: "02:00 PM",
        location: "Coliseum",
        color: "#ff0000",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 13,
        title: "Final Choreography",
        category: "Dance",
        day: 3,
        time: "06:00 PM",
        location: "Main Arena",
        color: "#ff0000",
        image: "https://images.unsplash.com/photo-1547153760-18fc21fca248?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 14,
        title: "Festival Encore",
        category: "Music",
        day: 3,
        time: "08:00 PM",
        location: "Grand Stadium",
        color: "#ff0000",
        image: "https://images.unsplash.com/photo-1459749411177-042180ceea72?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 15,
        title: "Closing Drama",
        category: "Drama",
        day: 3,
        time: "09:30 PM",
        location: "Auditorium",
        color: "#ff0000",
        image: "https://images.unsplash.com/photo-1460661419201-fd4ce18a802f?q=80&w=1000&auto=format&fit=crop"
    },
];

const categories = ["All", "Music", "Dance", "Drama", "Gaming", "Tech", "Art", "Craft", "Speech"];
const days = ["All", "Day 1", "Day 2", "Day 3"];

const Events = () => {
    const [filter, setFilter] = useState({ category: "All", day: "All" });

    const filteredEvents = allEvents.filter(event => {
        const categoryMatch = filter.category === "All" || event.category === filter.category;
        const dayMatch = filter.day === "All" || `Day ${event.day}` === filter.day;
        return categoryMatch && dayMatch;
    });

    return (
        <section className="events-cinematic-page" style={{ paddingTop: '150px', minHeight: '100vh', paddingBottom: '100px' }}>
            <div className="container">
                <div className="events-header-premium" style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ color: '#ff4d4d', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '8px', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}
                    >
                        THE SAGAS
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', fontWeight: 950, textTransform: 'uppercase', letterSpacing: '-2px', lineHeight: 0.9 }}
                    >
                        EVENT <span style={{ color: '#ff4d4d' }}>LINEUP</span>
                    </motion.h1>
                </div>

                <div className="premium-filters" style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', justifyContent: 'center', marginBottom: '6rem', padding: '2rem', background: 'rgba(255,255,255,0.02)', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div className="filter-block">
                        <label style={{ display: 'block', fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '3px', marginBottom: '1rem', fontWeight: 900, textTransform: 'uppercase' }}>Chapter</label>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            {days.map(d => (
                                <button
                                    key={d}
                                    onClick={() => setFilter(prev => ({ ...prev, day: d }))}
                                    style={{
                                        background: filter.day === d ? '#ff4d4d' : 'transparent',
                                        color: filter.day === d ? 'white' : 'rgba(255,255,255,0.6)',
                                        border: filter.day === d ? 'none' : '1px solid rgba(255,255,255,0.1)',
                                        padding: '0.6rem 1.5rem',
                                        borderRadius: '8px',
                                        fontSize: '0.75rem',
                                        fontWeight: 800,
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    {d}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="filter-block">
                        <label style={{ display: 'block', fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '3px', marginBottom: '1rem', fontWeight: 900, textTransform: 'uppercase' }}>Classification</label>
                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                            {categories.map(c => (
                                <button
                                    key={c}
                                    onClick={() => setFilter(prev => ({ ...prev, category: c }))}
                                    style={{
                                        background: filter.category === c ? '#ff4d4d' : 'transparent',
                                        color: filter.category === c ? 'white' : 'rgba(255,255,255,0.6)',
                                        border: filter.category === c ? 'none' : '1px solid rgba(255,255,255,0.1)',
                                        padding: '0.6rem 1.5rem',
                                        borderRadius: '8px',
                                        fontSize: '0.75rem',
                                        fontWeight: 800,
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    {c}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <motion.div layout className="events-museum-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '3rem' }}>
                    <AnimatePresence mode="popLayout">
                        {filteredEvents.map((event) => (
                            <motion.div
                                layout
                                key={event.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4 }}
                                className="museum-card"
                                style={{
                                    background: 'rgba(255,255,255,0.03)',
                                    borderRadius: '24px',
                                    overflow: 'hidden',
                                    position: 'relative',
                                    height: '500px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    border: '1px solid rgba(255,255,255,0.05)'
                                }}
                            >
                                <div className="card-image-wrap" style={{ height: '60%', position: 'relative', overflow: 'hidden' }}>
                                    <img src={event.image} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease' }} className="event-main-img" />
                                    <div style={{ position: 'absolute', top: '20px', right: '20px', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)', padding: '5px 15px', borderRadius: '50px', fontSize: '0.7rem', fontWeight: 800, color: 'white' }}>
                                        DAY {event.day}
                                    </div>
                                </div>
                                <div className="card-content" style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <div>
                                        <span style={{ color: event.color, fontSize: '0.7rem', fontWeight: 900, letterSpacing: '4px', textTransform: 'uppercase' }}>{event.category}</span>
                                        <h3 style={{ fontSize: '1.8rem', fontWeight: 950, margin: '0.5rem 0 1rem', color: 'white' }}>{event.title}</h3>
                                        <div style={{ display: 'flex', gap: '1.5rem', color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', fontWeight: 600 }}>
                                            <span><i className="far fa-clock"></i> {event.time}</span>
                                            <span><i className="fas fa-map-marker-alt"></i> {event.location}</span>
                                        </div>
                                    </div>
                                    <button style={{
                                        background: 'white',
                                        color: 'black',
                                        border: 'none',
                                        padding: '1rem',
                                        borderRadius: '12px',
                                        fontWeight: 900,
                                        fontSize: '0.8rem',
                                        marginTop: '1.5rem',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-3px)';
                                            e.currentTarget.style.boxShadow = `0 10px 20px rgba(255,255,255,0.2)`;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = 'none';
                                        }}
                                    >
                                        REGISTER ENTRY
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
            <style>{`
                .museum-card:hover .event-main-img {
                    transform: scale(1.1);
                }
                .museum-card {
                    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }
                .museum-card:hover {
                    box-shadow: 0 30px 60px rgba(0,0,0,0.5);
                    transform: translateY(-10px);
                    border-color: rgba(255,255,255,0.2);
                }
            `}</style>
        </section>
    );
};

export default Events;
