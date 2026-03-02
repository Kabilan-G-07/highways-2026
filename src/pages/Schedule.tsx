import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface EventItem {
    time: string;
    category: string;
    title: string;
    location: string;
    image: string;
}

interface DayData {
    id: number;
    name: string;
    subName: string;
    themeColor: string;
    textColor: string;
    borderColor: string;
    accentColor: string;
    events: EventItem[];
}

const scheduleData: DayData[] = [
    {
        id: 1,
        name: "CHAPTER 01",
        subName: "THE REVEAL",
        themeColor: "#ffb7c5",
        textColor: "#1a0f0f",
        borderColor: "rgba(255, 183, 197, 0.3)",
        accentColor: "#ffb7c5",
        events: [
            {
                time: "09:00 AM",
                category: "OPENING",
                title: "GOVERNANCE SUMMIT",
                location: "Main Auditorium",
                image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop"
            },
            {
                time: "11:00 AM",
                category: "MUSIC",
                title: "NEON SYMPHONY",
                location: "Open Air Theatre",
                image: "https://images.unsplash.com/photo-1514525253361-bee24386b17b?q=80&w=800&auto=format&fit=crop"
            },
            {
                time: "01:00 PM",
                category: "ART",
                title: "CREATIVE EXHIBIT",
                location: "Central Courtyard",
                image: "https://images.unsplash.com/photo-1460661419201-fd4ce18a802f?q=80&w=800&auto=format&fit=crop"
            },
            {
                time: "03:00 PM",
                category: "DANCE",
                title: "STREET BATTLE",
                location: "Main Stage",
                image: "https://images.unsplash.com/photo-1535525153412-5a42439a210d?q=80&w=800&auto=format&fit=crop"
            }
        ]
    },
    {
        id: 2,
        name: "CHAPTER 02",
        subName: "THE VIBE",
        themeColor: "#ffffff",
        textColor: "#000000",
        borderColor: "rgba(255, 255, 255, 0.3)",
        accentColor: "#00d2ff",
        events: [
            {
                time: "10:00 AM",
                category: "DRAMA",
                title: "THEATRE FINALE",
                location: "Stage X",
                image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=800&auto=format&fit=crop"
            },
            {
                time: "02:00 PM",
                category: "WORKSHOP",
                title: "DESIGN STRATEGY",
                location: "Innovation Hub",
                image: "https://images.unsplash.com/photo-1519074063912-cd29c394babc?q=80&w=800&auto=format&fit=crop"
            }
        ]
    },
    {
        id: 3,
        name: "CHAPTER 03",
        subName: "THE FINALE",
        themeColor: "#ff0000",
        textColor: "#ffffff",
        borderColor: "rgba(255, 0, 0, 0.3)",
        accentColor: "#ff0000",
        events: [
            {
                time: "11:00 AM",
                category: "PRO SHOW",
                title: "GRAND CELEBRATION",
                location: "Main Stadium",
                image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop"
            },
            {
                time: "03:00 PM",
                category: "DANCE",
                title: "GLOBAL FUSION",
                location: "Grand Hall",
                image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=800&auto=format&fit=crop"
            }
        ]
    }
];

const categories = ["ALL", "MUSIC", "DANCE", "DRAMA", "ART", "PRO SHOW", "WORKSHOP"];

const Schedule = () => {
    const [selectedDay, setSelectedDay] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState("ALL");

    const currentDayData = scheduleData.find(d => d.id === selectedDay) || scheduleData[0];

    const filteredEvents = currentDayData.events.filter(event =>
        selectedCategory === "ALL" || event.category === selectedCategory
    );

    return (
        <section className="schedule-page">
            <div className="schedule-container">
                <div className="back-link">
                    <Link to="/">
                        <i className="fas fa-chevron-left"></i> BACK TO OVERVIEW
                    </Link>
                </div>

                <div className="schedule-header">
                    <h1 className="schedule-title">EVENT SCHEDULE</h1>
                    <p className="schedule-subtitle">Plan your 3-day journey. Tap a day to see the lineup.</p>
                </div>

                <div className="day-selector">
                    {scheduleData.map(day => (
                        <button
                            key={day.id}
                            className={`day-btn ${selectedDay === day.id ? 'active' : ''}`}
                            onClick={() => setSelectedDay(day.id)}
                            style={{
                                '--day-theme': day.themeColor,
                                '--day-text': selectedDay === day.id ? day.textColor : '#ffffff'
                            } as React.CSSProperties}
                        >
                            <span className="day-label">{day.name}</span>
                            <span className="day-name">{day.subName}</span>
                        </button>
                    ))}
                </div>

                <div className="category-filters">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(cat)}
                            style={{
                                '--day-theme': currentDayData.themeColor
                            } as React.CSSProperties}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="timeline-view">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`${selectedDay}-${selectedCategory}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="timeline-content"
                        >
                            {filteredEvents.length > 0 ? (
                                filteredEvents.map((event, idx) => (
                                    <div key={idx} className="timeline-item">
                                        <div className="time-col">
                                            <span className="time-text">{event.time}</span>
                                            <div className="time-dot" style={{ background: currentDayData.themeColor }}></div>
                                        </div>
                                        <div className="event-card">
                                            <div className="event-image">
                                                <img src={event.image} alt={event.title} />
                                            </div>
                                            <div className="event-details">
                                                <span className="event-cat" style={{ color: currentDayData.themeColor }}>{event.category}</span>
                                                <h3 className="event-title">{event.title}</h3>
                                                <div className="event-loc">
                                                    <i className="fas fa-map-marker-alt"></i> {event.location}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="no-events">
                                    <p>No events found for this category.</p>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Schedule;
