import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Member {
    name: string;
    role: string;
    spirit: string;
    image: string;
    socials?: {
        instagram?: string;
        linkedin?: string;
    };
}

interface TeamGroup {
    id: string;
    name: string;
    members: Member[];
}

const teamData: TeamGroup[] = [
    {
        id: 'council',
        name: 'STUDENT COUNCIL',
        members: [
            { name: "Pranesh", role: "President", spirit: "The Visionary", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pranesh", socials: { instagram: "#" } },
            { name: "Sowmiya", role: "Vice President", spirit: "The Strategist", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sowmiya", socials: { instagram: "#" } },
            { name: "Kishore", role: "General Secretary", spirit: "The Backbone", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kishore", socials: { linkedin: "#" } },
            { name: "Harini", role: "Joint Secretary", spirit: "The Catalyst", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Harini" },
            { name: "Aravind", role: "Treasurer", spirit: "The Guardian", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aravind" }
        ]
    },
    {
        id: 'web',
        name: 'WEB ARCHITECTS',
        members: [
            { name: "Bala Krishnan", role: "Lead Architect", spirit: "The Visionary", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bala", socials: { linkedin: "#" } },
            { name: "Deepak", role: "Frontend Lead", spirit: "The Stylist", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Deepak" },
            { name: "Shruthi", role: "UI/UX Designer", spirit: "The Artist", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Shruthi" },
            { name: "Dinesh", role: "Backend Developer", spirit: "The Engine", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dinesh" },
            { name: "Siddarth", role: "Interface Dev", spirit: "The Bridge", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sid" },
            { name: "Ananya", role: "Logic Architect", spirit: "The Flow", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya" },
            { name: "Vikram", role: "System Designer", spirit: "The Core", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram" }
        ]
    },
    {
        id: 'design',
        name: 'VISUAL DESIGN',
        members: [
            { name: "Rahul", role: "Creative Director", spirit: "The Dreamer", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul" },
            { name: "Priya", role: "Head of Graphics", spirit: "The Painter", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya" }
        ]
    },
    {
        id: 'events',
        name: 'CORE OPERATIONS',
        members: [
            { name: "Sanjay", role: "Event Head", spirit: "The General", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sanjay" },
            { name: "Meera", role: "Logistics Head", spirit: "The Navigator", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera" }
        ]
    }
];

const Team = () => {
    const [activeTab, setActiveTab] = useState(teamData[0].id);
    const activeGroup = teamData.find(t => t.id === activeTab) || teamData[0];

    return (
        <section className="team-page-v3" style={{ paddingTop: '150px', background: '#050505', minHeight: '100vh', color: 'white' }}>
            <div className="container">
                <div className="team-header" style={{ marginBottom: '5rem' }}>
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ color: '#ff4d4d', letterSpacing: '8px', fontWeight: 900, display: 'block', marginBottom: '1rem', fontSize: '0.8rem' }}
                    >
                        THE ARCHITECTS
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: 950, lineHeight: 1.1, textTransform: 'uppercase' }}
                    >
                        MEET THE <span style={{ color: '#ff4d4d' }}>FORCE</span> BEHIND HIGHWAYS
                    </motion.h1>
                </div>

                <div className="team-tabs" style={{ display: 'flex', gap: '1rem', marginBottom: '5rem', flexWrap: 'wrap' }}>
                    {teamData.map(group => (
                        <button
                            key={group.id}
                            onClick={() => setActiveTab(group.id)}
                            style={{
                                background: activeTab === group.id ? 'white' : 'transparent',
                                color: activeTab === group.id ? 'black' : 'rgba(255,255,255,0.6)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                padding: '1rem 2rem',
                                borderRadius: '15px',
                                fontWeight: 900,
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                fontSize: '0.8rem',
                                letterSpacing: '1px'
                            }}
                        >
                            {group.name}
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                        className="members-grid"
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '3rem' }}
                    >
                        {activeGroup.members.map((member, idx) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="member-card-new"
                                style={{
                                    background: 'rgba(255,255,255,0.03)',
                                    borderRadius: '30px',
                                    padding: '2.5rem',
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    textAlign: 'center',
                                    transition: 'all 0.4s ease'
                                }}
                            >
                                <div className="member-image-wrap" style={{
                                    width: '180px',
                                    height: '180px',
                                    margin: '0 auto 2rem',
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    border: '4px solid rgba(255, 77, 77, 0.2)'
                                }}>
                                    <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <span style={{ color: '#ff4d4d', fontSize: '0.7rem', fontWeight: 900, letterSpacing: '3px', textTransform: 'uppercase' }}>{member.spirit}</span>
                                <h3 style={{ fontSize: '1.8rem', fontWeight: 900, margin: '10px 0' }}>{member.name}</h3>
                                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', fontWeight: 600 }}>{member.role}</p>
                                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '2rem' }}>
                                    {member.socials?.instagram && <a href={member.socials.instagram} style={{ color: 'rgba(255,255,255,0.3)', transition: '0.3s' }}><i className="fab fa-instagram"></i></a>}
                                    {member.socials?.linkedin && <a href={member.socials.linkedin} style={{ color: 'rgba(255,255,255,0.3)', transition: '0.3s' }}><i className="fab fa-linkedin-in"></i></a>}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
            <style>{`
                .member-card-new:hover {
                    background: rgba(255,255,255,0.05) !important;
                    transform: translateY(-10px);
                    border-color: rgba(255, 77, 77, 0.3) !important;
                    box-shadow: 0 30px 60px rgba(0,0,0,0.5);
                }
                .member-card-new:hover .member-image-wrap {
                    border-color: #ff4d4d !important;
                    transform: scale(1.05);
                }
            `}</style>
        </section>
    );
};

export default Team;