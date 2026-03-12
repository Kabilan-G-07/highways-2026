import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Member {
    name: string;
    role: string;
    spirit: string;
    image: string;
    imagePosition?: string;
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
        "id": "marketing",
        "name": "MARKETING & SALES",
        "members": [
            { "name": "ARIVUNITHI R", "role": "Lead", "spirit": "The Visionary", "image": "/members/Arivunithi R  - ARIVUNITHI R CSE.webp" },
            { "name": "Sunil kumar v", "role": "Member", "spirit": "The Strategist", "image": "/members/IMG-20260211-WA0027 - SUNIL KUMAR V CVE.webp", "imagePosition": "center 10%" },
            { "name": "M.logeshwaran", "role": "Member", "spirit": "The Architect", "image": "/members/IMG_20250926_234941_345 - LOGESHWARAN M ECE.webp" },
            { "name": "Santhoshkumar C", "role": "Member", "spirit": "The Catalyst", "image": "/members/IMG_20251114_221105 - SANTHOSHKUMAR C EEE.webp" },
            { "name": "SAISUNDAR S", "role": "Member", "spirit": "The Creative", "image": "/members/IMG-20260220-WA0012 - SAISUNDAR S EEE.webp" },
            { "name": "NARAEN KARTICK A", "role": "Member", "spirit": "The Engine", "image": "/members/Naraen Kartick-Sublead_Marketing - NARAEN KARTICK A CVE.webp" },
            { "name": "C Dhinesh", "role": "Member", "spirit": "The Pulse", "image": "/members/Dhinesh-Member_Marketing - DHINESH C CSE.webp" },
            { "name": "Yuvakannan D", "role": "Member", "spirit": "The Guardian", "image": "/members/20250925_213406 - YUVAKANNAN D CSE.webp", "imagePosition": "center 12%" },
            { "name": "RB YUVAN", "role": "Member", "spirit": "The Navigator", "image": "/members/RB Yuvan-Member_marketing and sales - RB YUVAN ECE.webp" },
            { "name": "Veeraiah V", "role": "Member", "spirit": "The Maven", "image": "/members/VEERAIAH V - Marketing and sales (1) - VEERAIAH V CHEM.webp", "imagePosition": "center 12%" },
            { "name": "Madhan Balaji A", "role": "Member", "spirit": "The Craftsman", "image": "/members/Madhan-marketing-member - 026 MADHAN BALAJI A ME.webp" },
            { "name": "Dayaalan K T", "role": "Member", "spirit": "The Pioneer", "image": "/members/Dayaalan K T-Marketing_Member - DAYAALAN K T CSE.webp", "imagePosition": "center 10%" },
            { "name": "Sucharitha Kapuluru", "role": "Member", "spirit": "The Trailblazer", "image": "/members/IMG-20260115-WA0030(2) - SUCHARITHA KAPULURU AI&DS.webp" },
            { "name": "Roshan M", "role": "Member", "spirit": "The Alchemist", "image": "/members/Roshan M - Member_Marketing - 116 ROSHAN M ECE.webp" },
            { "name": "VASANTH K N", "role": "Member", "spirit": "The Sentinel", "image": "/members/VASANTH K N - MEMBER - MARKETING AND SALESs - VASANTH K N AI&DS.webp" },
            { "name": "AKSHAY V", "role": "Member", "spirit": "The Vanguard", "image": "/members/AKSHAY_V_SUBLEAD_MARKETTING_TEAM - 005 AKSHAY V MEC.webp" }
        ]
    },
    {
        "id": "design",
        "name": "VISUAL DESIGN",
        "members": [
            { "name": "ASHISH S", "role": "Lead", "spirit": "The Luminary", "image": "/members/IMG_9669 (1) - ASHISH S CSE.webp" },
            { "name": "Yogendra SK", "role": "Member", "spirit": "The Maestro", "image": "/members/IMG_20250329_175034 - 056 YOGENDRA S K ME.webp" },
            { "name": "Thirunesh S", "role": "Member", "spirit": "The Artisan", "image": "/members/photo - THIRUNESH S Mech & Auto Engg.webp" },
            { "name": "Harish K", "role": "Member", "spirit": "The Virtuoso", "image": "/members/Harish K - Member - Design - HARISH K AI&DS.webp" },
            { "name": "Yeseswini.S", "role": "Member", "spirit": "The Pathfinder", "image": "/members/yeseswini-member_design - YESESWINI S AI&DS.webp" }
        ]
    },
    {
        "id": "events",
        "name": "EVENT PLANNING",
        "members": [
            { "name": "ASHWIN R", "role": "Lead", "spirit": "The Envisioner", "image": "/members/Ashwin 1 - ASHWIN R ECE.webp" },
            { "name": "Madhav. Ba", "role": "Member", "spirit": "The Conductor", "image": "/members/17039 - MADHAV BA Mech & Auto Engg.webp" },
            { "name": "Pritika Rajesh Kannan", "role": "Member", "spirit": "The Spark", "image": "/members/Pritika- Member-Event planning and coordination - PRITIKA RAJESH KANNAN ECE.webp" },
            { "name": "Vethavarna V", "role": "Member", "spirit": "The Keystone", "image": "/members/20260301_191701 - VETHAVARNA V ECE.webp" },
            { "name": "Suraj G", "role": "Member", "spirit": "The Anchor", "image": "/members/passport size photo  - SURAJ G IT.webp" },
            { "name": "Kavinidhi R P", "role": "Member", "spirit": "The Beacon", "image": "/members/Kavinidhi R P - Member_Event_Planning - KAVINIDHI R P AI&DS.webp" },
            { "name": "Gururaaje M", "role": "Member", "spirit": "The Zenith", "image": "/members/Gururaje_ Sub lead_Event planning Wing - GURURAJE M CE.webp" }
        ]
    },
    {
        "id": "web",
        "name": "WEB ARCHITECTS",
        "members": [
            { "name": "Balakrishnan.R", "role": "Lead", "spirit": "The Oracle", "image": "/members/Balakrishnan.webp" },
            { "name": "B jashwanth shankar", "role": "Member", "spirit": "The Apex", "image": "/members/jashwanth-member_web - B JASHWANTH SHANKAR CSE.webp", "imagePosition": "center 8%" }
        ]
    },
    {
        "id": "art",
        "name": "ART & DECORATION",
        "members": [
            { "name": "Brindha AG", "role": "Member", "spirit": "The Sage", "image": "/members/20240816_141115_11zon - BRINDHA A G Mech & Auto Engg.webp" },
            { "name": "Tharun Kumar S", "role": "Member", "spirit": "The Warden", "image": "/members/6809 - THARUN KUMAR S Biotech.webp" },
            { "name": "VASUNDRA S", "role": "Member", "spirit": "The Keeper", "image": "/members/IMG_20260301_192515 - VASUNDRA S AI&DS.webp" },
            { "name": "VidhyaaVardhani Ramesh", "role": "Member", "spirit": "The Shaper", "image": "/members/IMG-20260301-WA0051 - VIDHYAA VARDHANI RAMESH AI&DS.webp" },
            { "name": "M S JOSHIKA", "role": "Member", "spirit": "The Weaver", "image": "/members/Joshika-member_art_and_decoration - M S JOSHIKA CSE.webp" },
            { "name": "Nithya Shiva Thirumalaivarathan", "role": "Member", "spirit": "The Pilot", "image": "/members/20260301_201913 - NITHYA SHIVA THIRUMALAIVARATHAN CSE.webp" },
            { "name": "Visvajith S A", "role": "Member", "spirit": "The Voyager", "image": "/members/20251219_000434 - VISVAJITH S A ECE.webp" },
            { "name": "Harishmani E", "role": "Member", "spirit": "The Scout", "image": "/members/harishmani-2127250501069_art&decor - HARISH MANI E CSE.webp" },
            { "name": "Priyadharshini", "role": "Member", "spirit": "The Ranger", "image": "/members/IMG-20260214-WA0072 - PRIYADHARSHINI R AI&DS.webp" },
            { "name": "Harshitha R", "role": "Member", "spirit": "The Champion", "image": "/members/Snapchat-1276341197_Original - HARSHITHA R ECE.webp" },
            { "name": "A Mahathi Kavya", "role": "Member", "spirit": "The Titan", "image": "/members/IMG_8029 - A MAHATHI KAVYA ECE.webp" }
        ]
    },
    {
        "id": "sponsorship",
        "name": "BUSINESS PARTNERSHIPS",
        "members": [
            { "name": "KS Bharath", "role": "Lead", "spirit": "The Knight", "image": "/members/KS Bharath - Sponsorship Lead - 007 BHARATH KS MN.webp" },
            { "name": "Akshara Srivatsan", "role": "Member", "spirit": "The Colossus", "image": "/members/0173b395-cfc5-4e47-ad25-9784265dc42f - AKSHARA SRIVATSAN CSE.webp" },
            { "name": "Anton Jacob", "role": "Member", "spirit": "The Baron", "image": "/members/IMG_7578 - 010 ANTON JACOB W ME.webp" },
            { "name": "Arpitha Paraneetharan", "role": "Member", "spirit": "The Rogue", "image": "/members/Arpitha- Sponsorship wing - ARPITHA PARANEETHARAN CSE.webp" },
            { "name": "Buvanesh Raaj B Y", "role": "Member", "spirit": "The Hunter", "image": "/members/WhatsApp Image 2026-03-01 at 9.30.55 PM - 013 BUVANESH RAAJ B Y ME.webp" },
            { "name": "Shaik aadhil", "role": "Member", "spirit": "The Seeker", "image": "/members/cf3184e0-3387-4851-b43d-921c8285cf23 - SHAIK AADHIL S AI&DS.webp" },
            { "name": "Athmaja Gugan", "role": "Member", "spirit": "The Nomad", "image": "/members/Athmaja- Member_Sponsorship - ATHMAJA G ECE.webp" },
            { "name": "Harshitha R", "role": "Member", "spirit": "The Wanderer", "image": "/members/Snapchat-1276341197_Original - HARSHITHA R ECE.webp" },
            { "name": "S. Ananthika", "role": "Member", "spirit": "The Spirit", "image": "/members/1772435076377 - S ANANTHIKA AI&DS.webp" },
            { "name": "Yaathra P", "role": "Member", "spirit": "The Soul", "image": "/members/IMG-20251025-WA0051~2 - YAATHRA P CSE.webp" },
            { "name": "A Mahathi Kavya", "role": "Member", "spirit": "The Heart", "image": "/members/IMG_8029 - A MAHATHI KAVYA ECE.webp" },
            { "name": "V Lingesh", "role": "Member", "spirit": "The Brain", "image": "/members/V.Lingesh-Member_sponsorship - V LINGESH CHEM.webp" },
            { "name": "Sri Varsha S", "role": "Member", "spirit": "The Hand", "image": "/members/sri_varsha-member-sponsorship - SRI VARSHA S CSE.webp" }
        ]
    },
    {
        "id": "operations",
        "name": "CORE OPERATIONS",
        "members": [
            { "name": "Rushil", "role": "Member", "spirit": "The Eye", "image": "/members/Rushil-Member_Operations - RUSHIL P BIO.webp" },
            { "name": "Amirthavarshini J", "role": "Member", "spirit": "The Voice", "image": "/members/Amirthavarshini-member_operations - AMIRTHAVARSHINI J CSE.webp" },
            { "name": "KAVIYA M", "role": "Member", "spirit": "The Echo", "image": "/members/IMG_20260212_162509 - KAVIYA M CSE.webp" },
            { "name": "Anton jacob", "role": "Member", "spirit": "The Shadow", "image": "/members/IMG_7578 - 010 ANTON JACOB W ME.webp" },
            { "name": "Arun D", "role": "Member", "spirit": "The Light", "image": "/members/Arun D - operation_wing_member - ARUN D ECE.webp" },
            { "name": "Meenatshi P", "role": "Member", "spirit": "The Flame", "image": "/members/Meenatshi_P-member_Operations - MEENATSHI P CSE.webp" },
            { "name": "U S SANJEEVAN", "role": "Member", "spirit": "The Frost", "image": "/members/U S Sanjeevan-Member-Operations_Wing - U S SANJEEVAN EEE.webp" },
            { "name": "Abdul Rahman N", "role": "Member", "spirit": "The Storm", "image": "/members/Abdul Rahman N-Member_Operations - ABDUL RAHMAN N AE.webp" }
        ]
    },
    {
        "id": "celebrity",
        "name": "CELEBRITY RELATIONS",
        "members": [
            { "name": "Nimal.S", "role": "Member", "spirit": "The Tide", "image": "/members/IMG_20260213-WA0028(1) - NIMAL S EEE.webp" }
        ]
    }
];

const Team = () => {
    const [activeTab, setActiveTab] = useState(teamData[0].id);
    const activeGroup = teamData.find(t => t.id === activeTab) || teamData[0];

    return (
        <section className="team-page-v3" style={{ 
            paddingTop: 'clamp(100px, 15vh, 150px)', 
            background: '#050505', 
            minHeight: '100vh', 
            color: 'white',
            overflowX: 'hidden'
        }}>
            <div className="container" style={{ width: '90%', maxWidth: '1400px', margin: '0 auto' }}>
                <div className="team-header" style={{ marginBottom: 'clamp(3rem, 10vh, 5rem)', textAlign: 'center' }}>
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        style={{ color: '#ff4d4d', letterSpacing: '8px', fontWeight: 900, display: 'block', marginBottom: '1rem', fontSize: 'clamp(0.7rem, 2vw, 0.8rem)' }}
                    >
                        THE ARCHITECTS
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        style={{ fontSize: 'clamp(2.2rem, 8vw, 5rem)', fontWeight: 950, lineHeight: 1.1, textTransform: 'uppercase' }}
                    >
                        MEET THE <span style={{ color: '#ff4d4d' }}>FORCE</span> BEHIND HIGHWAYS
                    </motion.h1>
                </div>

                <div className="team-tabs" style={{ 
                    display: 'flex', 
                    gap: '0.8rem', 
                    marginBottom: 'clamp(3rem, 8vh, 5rem)', 
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    {teamData.map(group => (
                        <button
                            key={group.id}
                            onClick={() => setActiveTab(group.id)}
                            style={{
                                background: activeTab === group.id ? 'white' : 'rgba(255,255,255,0.03)',
                                color: activeTab === group.id ? 'black' : 'rgba(255,255,255,0.6)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                padding: 'clamp(0.8rem, 2vw, 1rem) clamp(1.2rem, 3vw, 2rem)',
                                borderRadius: '15px',
                                fontWeight: 900,
                                cursor: 'pointer',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                fontSize: 'clamp(0.7rem, 1.5vw, 0.8rem)',
                                letterSpacing: '1px',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            {group.name}
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="members-grid"
                    >
                        {activeGroup.members.map((member, idx) => (
                            <motion.div
                                key={`${activeTab}-${member.name}-${idx}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                viewport={{ once: true }}
                                className="member-card-new"
                                style={{
                                    background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
                                    borderRadius: 'clamp(20px, 5vw, 40px)',
                                    padding: 'clamp(1.5rem, 5vw, 3rem)',
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    textAlign: 'center',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                <div className="member-image-wrap" style={{
                                    width: 'clamp(140px, 40vw, 180px)',
                                    height: 'clamp(140px, 40vw, 180px)',
                                    margin: '0 auto 2rem',
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    border: '4px solid rgba(255, 77, 77, 0.15)',
                                    position: 'relative',
                                    zIndex: 2,
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                                    background: 'rgba(255,255,255,0.02)'
                                }}>
                                    <img 
                                        src={member.image} 
                                        alt={member.name} 
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: member.imagePosition ?? 'center 15%' }}
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}`;
                                        }}
                                    />
                                </div>
                                <div style={{ position: 'relative', zIndex: 2 }}>
                                    <span style={{ color: '#ff4d4d', fontSize: 'clamp(0.6rem, 2vw, 0.7rem)', fontWeight: 900, letterSpacing: '3px', textTransform: 'uppercase' }}>{member.spirit}</span>
                                    <h3 style={{ fontSize: 'clamp(1.2rem, 4vw, 1.8rem)', fontWeight: 900, margin: '12px 0', letterSpacing: '-0.5px' }}>{member.name}</h3>
                                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', fontWeight: 600 }}>{member.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
            <style>{`
                .members-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(clamp(250px, 100%, 350px), 1fr));
                    gap: clamp(1.5rem, 4vw, 3rem);
                }
                
                .members-grid > div {
                    width: 100%;
                }

                .member-card-new {
                    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .member-card-new::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background: radial-gradient(circle at top right, rgba(255,77,77,0.05), transparent);
                    opacity: 0;
                    transition: opacity 0.5s ease;
                }

                .member-card-new:hover {
                    transform: translateY(-15px) scale(1.02);
                    border-color: rgba(255, 77, 77, 0.3);
                    background: linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%);
                    box-shadow: 0 40px 80px rgba(0,0,0,0.6);
                }

                .member-card-new:hover::before {
                    opacity: 1;
                }

                .member-card-new:hover .member-image-wrap {
                    border-color: #ff4d4d;
                    transform: scale(1.05) rotate(5deg);
                }

                .team-tabs button:hover {
                    border-color: rgba(255,255,255,0.3);
                    background: rgba(255,255,255,0.05);
                }

                @media (max-width: 600px) {
                    .members-grid {
                        grid-template-columns: 1fr !important;
                        padding: 0 10px;
                        gap: 1.5rem !important;
                    }
                    .team-tabs {
                        gap: 0.5rem !important;
                        padding: 0 10px;
                    }
                    .team-tabs button {
                        padding: 0.7rem 1rem !important;
                        flex: 1 1 auto;
                        min-width: calc(50% - 0.5rem);
                        font-size: 0.65rem !important;
                    }
                    .member-card-new {
                        padding: 1.5rem !important;
                    }
                    .member-image-wrap {
                        margin-bottom: 1.5rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Team;
