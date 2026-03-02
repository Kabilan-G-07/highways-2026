import { useState } from 'react';
import { motion } from 'framer-motion';

const Passes = () => {
    const [selectedPass, setSelectedPass] = useState<string | null>(null);

    const passesRepo = [
        {
            id: 'day1',
            name: '1ST DAY PASS',
            originalPrice: '600',
            svcePrice: '449',
            otherPrice: '449',
            color: '#ffb7c5',
            desc: '(Inclusive of Celebrity Walk-in, Cultural Events + Day 1 classic events)'
        },
        {
            id: 'day2',
            name: '2ND DAY PASS',
            originalPrice: '600',
            svcePrice: '549',
            otherPrice: '549',
            color: '#ffffff',
            desc: '(Inclusive of Celebrity Walk-in, Stand up, DJ Night + Day 2 classic events)'
        },
        {
            id: 'combo',
            name: "HIGHWAYS' 26 TICKET",
            originalPrice: '999',
            svcePrice: '599',
            otherPrice: '799',
            color: '#ef233c',
            desc: 'Unlock the full spectrum of cultural delights with the Highways 26 combo pass. Prepare for two days of unforgettable entertainment!'
        },
        {
            id: 'alumni',
            name: 'ALUMNI TICKET',
            price: '999',
            color: '#ffffff',
            desc: 'Exclusive entry for SVCE legends. Welcome back home!'
        }
    ];

    const currentPass = passesRepo.find(p => p.id === selectedPass);

    return (
        <section className="passes-page" style={{ paddingTop: '150px', minHeight: '100vh', paddingBottom: '100px' }}>
            <div className="container">
                <div className="passes-header" style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h1 style={{ fontSize: '4rem', fontWeight: 900, letterSpacing: '2px', textTransform: 'uppercase' }}>BUY YOUR PASSES</h1>
                </div>

                {!selectedPass ? (
                    <div className="passes-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {passesRepo.map((pass, i) => (
                            <motion.div
                                key={pass.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="pass-card"
                                onClick={() => setSelectedPass(pass.id)}
                                style={{
                                    background: 'rgba(0,0,0,0.8)',
                                    border: `1px solid ${pass.color}`,
                                    borderRadius: '12px',
                                    padding: '3rem 2rem',
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    minHeight: '400px'
                                }}
                            >
                                <div>
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: 900, marginBottom: '2rem' }}>{pass.name}</h3>
                                    {pass.originalPrice && (
                                        <div style={{ color: 'red', textDecoration: 'line-through', marginBottom: '1rem', fontSize: '0.9rem' }}>
                                            Original Price: ₹{pass.originalPrice}
                                        </div>
                                    )}
                                    <div style={{ marginBottom: '0.5rem', fontWeight: 700 }}>
                                        SVCE Students: <span style={{ color: pass.color }}>₹{pass.svcePrice || pass.price}</span>
                                    </div>
                                    <div style={{ fontWeight: 700 }}>
                                        Other College Students: <span style={{ color: pass.color }}>₹{pass.otherPrice || pass.price}</span>
                                    </div>
                                </div>
                                <button style={{
                                    marginTop: '2rem',
                                    padding: '1rem',
                                    background: 'transparent',
                                    border: `1px solid ${pass.color}`,
                                    color: pass.color,
                                    borderRadius: '8px',
                                    fontWeight: 900,
                                    letterSpacing: '1px'
                                }}>BUY NOW</button>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="checkout-container"
                        style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}
                    >
                        <div className="checkout-info">
                            <button onClick={() => setSelectedPass(null)} style={{ background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.5)', cursor: 'pointer', marginBottom: '2rem', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                ← BACK TO PASSES
                            </button>
                            <h2 style={{ fontSize: '3.5rem', fontWeight: 900, color: currentPass?.color }}>{currentPass?.name}</h2>
                            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', margin: '2rem 0', lineHeight: 1.6 }}>{currentPass?.desc}</p>

                            <div className="checkout-pricing" style={{ fontSize: '1.5rem', fontWeight: 900 }}>
                                {currentPass?.originalPrice && (
                                    <div style={{ color: 'red', textDecoration: 'line-through', fontSize: '1rem', opacity: 0.5 }}>Orginal Price: ₹{currentPass.originalPrice}</div>
                                )}
                                <div style={{ color: currentPass?.color, marginTop: '0.5rem' }}>SVCE Students: ₹{currentPass?.svcePrice || currentPass?.price}</div>
                                <div style={{ color: currentPass?.color }}>Other College Students: ₹{currentPass?.otherPrice || currentPass?.price}</div>
                            </div>
                        </div>

                        <div className="checkout-form-container" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', padding: '3rem', borderRadius: '20px' }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '2rem' }}>Fill the details to buy your ticket 🎫</h3>
                            <form className="ticket-form" style={{ display: 'grid', gap: '1.5rem' }}>
                                <div className="form-group">
                                    <input type="text" placeholder="Name" style={formInputStyle} />
                                </div>
                                <div className="form-group">
                                    <input type="text" placeholder="Address" style={formInputStyle} />
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <input type="text" placeholder="City" style={formInputStyle} />
                                    <input type="text" placeholder="Pincode" style={formInputStyle} />
                                </div>
                                <div className="form-group">
                                    <input type="tel" placeholder="Phone No" style={formInputStyle} />
                                </div>
                                <div className="form-group">
                                    <input type="email" placeholder="Email ID" style={formInputStyle} />
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <input type="text" placeholder="Year of Study" style={formInputStyle} />
                                    <input type="text" placeholder="College Register No" style={formInputStyle} />
                                </div>
                                <div className="form-group">
                                    <input type="text" placeholder="College" style={formInputStyle} />
                                </div>
                                <div className="form-group">
                                    <input type="text" placeholder="Department" style={formInputStyle} />
                                </div>
                                <p style={{ fontSize: '0.7rem', opacity: 0.5, textAlign: 'center' }}>Note: Please provide a valid email address for receiving the tickets.</p>
                                <button type="button" style={{
                                    background: 'white',
                                    color: 'black',
                                    border: 'none',
                                    padding: '1.2rem',
                                    borderRadius: '8px',
                                    fontWeight: 900,
                                    fontSize: '0.9rem',
                                    marginTop: '1rem',
                                    cursor: 'pointer',
                                    textTransform: 'uppercase'
                                }}>PROCEED TO PAYMENT</button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </div>

            <style>{`
                .pass-card:hover { border-width: 2px !important; }
                @media (max-width: 992px) {
                    .checkout-container { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </section>
    );
};

const formInputStyle = {
    width: '100%',
    padding: '1rem',
    background: 'rgba(0,0,0,0.5)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '6px',
    color: 'white',
    fontSize: '0.9rem',
    outline: 'none'
};

export default Passes;
