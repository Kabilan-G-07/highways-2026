import fs from 'fs';

const pricingUpdates = {
    1: { regType: 'Free', regFee: '', prizePool: '', teamSize: 'Solo' },
    2: { regType: 'Premium', regFee: '₹400/Team', prizePool: '₹4.5K', teamSize: 'Group' },
    3: { regType: 'Free', regFee: '', prizePool: '', teamSize: 'Solo' },
    4: { regType: 'Free', regFee: '', prizePool: '', teamSize: 'Solo' },
    5: { regType: 'Free', regFee: '', prizePool: '', teamSize: 'Solo' },
    6: { regType: 'Free', regFee: '', prizePool: '', teamSize: 'Solo' },
    7: { regType: 'Standard', regFee: '₹50/Person', prizePool: '₹1.5K', teamSize: 'Solo' },
    8: { regType: 'Free', regFee: '', prizePool: '', teamSize: 'Solo' },
    9: { regType: 'Free', regFee: '', prizePool: '', teamSize: 'Solo' },
    10: { regType: 'Free', regFee: '', prizePool: '', teamSize: 'Solo' },
    11: { regType: 'Free', regFee: '', prizePool: '', teamSize: 'Solo' },
    12: { regType: 'Standard', regFee: '', prizePool: '', teamSize: 'Solo' },
    13: { regType: 'Free', regFee: '', prizePool: '', teamSize: 'Solo' },
    14: { regType: 'Free', regFee: '', prizePool: '', teamSize: 'Solo' },
    15: { regType: 'Premium', regFee: '₹100/Person', prizePool: '₹5K', teamSize: 'Solo' },
    16: { regType: 'Standard', regFee: '₹30/Person', prizePool: '', teamSize: 'Solo' },
    17: { regType: 'Free', regFee: '', prizePool: '', teamSize: 'Solo' },
    18: { regType: 'Premium', regFee: '', prizePool: '', teamSize: 'Solo' },
    19: { regType: 'Free', regFee: '', prizePool: '', teamSize: 'Solo' },
    20: { regType: 'Standard', regFee: '₹50/Team', prizePool: '₹1.5K', teamSize: 'Group' },
    21: { regType: 'Free', regFee: '', prizePool: '', teamSize: 'Solo' },
    22: { regType: 'Premium', regFee: '₹150/Team', prizePool: '₹4.5K', teamSize: 'Group' },
    23: { regType: 'Standard', regFee: '₹75/Team', prizePool: '₹1K', teamSize: 'Group' },
    24: { regType: 'Standard', regFee: '₹75/Team', prizePool: '₹1.5K', teamSize: 'Group' },
    25: { regType: 'Standard', regFee: '₹100/Team', prizePool: '₹1.5K', teamSize: 'Group' },
    26: { regType: 'Standard', regFee: '₹50/Person', prizePool: '₹1.5K', teamSize: 'Solo' },
    27: { regType: 'Standard', regFee: '₹100/Team', prizePool: '₹1.5K', teamSize: 'Group' },
    28: { regType: 'Free', regFee: '', prizePool: '', teamSize: 'Solo' },
    29: { regType: 'Free', regFee: '', prizePool: '', teamSize: 'Solo' },
    30: { regType: 'Standard', regFee: '', prizePool: '', teamSize: 'Solo' },
    31: { regType: 'Free', regFee: '', prizePool: '', teamSize: 'Solo' },
    32: { regType: 'Premium', regFee: '', prizePool: '', teamSize: 'Solo' },
    33: { regType: 'Free', regFee: '', prizePool: '', teamSize: 'Solo' },
    34: { regType: 'Free', regFee: '', prizePool: '', teamSize: 'Solo' },
    35: { regType: 'Premium', regFee: '₹1000/Team', prizePool: '₹10K', teamSize: 'Group' },
    36: { regType: 'Premium', regFee: '₹250/Person', prizePool: '₹6K', teamSize: 'Solo' },
    37: { regType: 'Premium', regFee: '₹150/Person', prizePool: '₹4K', teamSize: 'Solo' },
    38: { regType: 'Premium', regFee: '₹150/Person', prizePool: '₹4K', teamSize: 'Solo' },
    39: { regType: 'Premium', regFee: '₹1000/Team', prizePool: '₹12K', teamSize: 'Group' },
    40: { regType: 'Premium', regFee: '₹400/Team', prizePool: '₹6K', teamSize: 'Group' },
};

const p = 'src/pages/Events.tsx';
let data = fs.readFileSync(p, 'utf8');

const startMarker = 'const allEvents: EventDetail[] = [';
let arrayStartIndex = data.indexOf(startMarker) + 'const allEvents: EventDetail[] = '.length;
let depth = 0;
let arrayEndIndex = -1;

for (let i = arrayStartIndex; i < data.length; i++) {
    if (data[i] === '[') depth++;
    if (data[i] === ']') {
        if (depth === 0) {
            arrayEndIndex = i + 1;
            break;
        }
        depth--;
    }
}

const eventsStr = data.substring(arrayStartIndex - 1, arrayEndIndex);
let allEvents = JSON.parse(eventsStr);

allEvents.forEach(e => {
    if (pricingUpdates[e.id]) {
        const p = pricingUpdates[e.id];
        e.regType = p.regType;
        if (p.regFee) { e.regFee = p.regFee; } else { delete e.regFee; }
        e.prizePool = p.prizePool;
        e.teamSize = p.teamSize;
    }
    
    if (e.prizePool === 'TBA' || e.prizePool.trim() === '') {
        e.prizePool = "";
    }
});

const newEventsJSON = JSON.stringify(allEvents, null, 2);
data = data.substring(0, arrayStartIndex - 1) + newEventsJSON + data.substring(arrayEndIndex);

// Update condition for modal Prize Pool
data = data.replace(
    /\{event\.regType !== 'Free' && \(\s*<div.*?TOTAL PRIZE POOL.*?<\/div>\s*\)\}/s,
    `{event.prizePool && event.prizePool !== 'TBA' && event.prizePool !== '' && (
                                <div style={{ marginBottom: '3rem', background: \`linear-gradient(45deg, \${activeTheme.color}22, transparent)\`, padding: '2rem', borderRadius: '24px', borderLeft: \`4px solid \${activeTheme.color}\` }}>
                                    <h4 style={{ color: 'white', fontSize: '0.8rem', fontWeight: 900, letterSpacing: '2px', marginBottom: '0.5rem' }}>TOTAL PRIZE POOL</h4>
                                    <p style={{ fontSize: '2.5rem', fontWeight: 950, color: 'white' }}>{event.prizePool}</p>
                                </div>
                            )}`
);

fs.writeFileSync(p, data, 'utf8');
console.log('Events updated');
