
import fs from 'fs';
import path from 'path';

const membersDir = 'd:/highways website/version 3/highways/public/members';
const files = fs.readdirSync(membersDir);

const teamData = [
    {
        "id": "marketing",
        "name": "MARKETING & SALES",
        "members": [
            { "name": "ARIVUNITHI R", "role": "Lead", "spirit": "The Visionary" },
            { "name": "Sunil kumar v", "role": "Member", "spirit": "The Strategist" },
            { "name": "M.logeshwaran", "role": "Member", "spirit": "The Architect" },
            { "name": "Santhoshkumar C", "role": "Member", "spirit": "The Catalyst" },
            { "name": "SAISUNDAR S", "role": "Member", "spirit": "The Creative" },
            { "name": "NARAEN KARTICK A", "role": "Sub lead", "spirit": "The Engine" },
            { "name": "C Dhinesh", "role": "Member", "spirit": "The Pulse" },
            { "name": "Yuvakannan D", "role": "Member", "spirit": "The Guardian" },
            { "name": "RB YUVAN", "role": "Member", "spirit": "The Navigator" },
            { "name": "Veeraiah V", "role": "Member", "spirit": "The Maven" },
            { "name": "Madhan Balaji A", "role": "Member", "spirit": "The Craftsman" },
            { "name": "Dayaalan K T", "role": "Member", "spirit": "The Pioneer" },
            { "name": "Sucharitha Kapuluru", "role": "Member", "spirit": "The Trailblazer" },
            { "name": "Roshan M", "role": "Member", "spirit": "The Alchemist" },
            { "name": "VASANTH K N", "role": "Member", "spirit": "The Sentinel" },
            { "name": "AKSHAY V", "role": "Sub lead", "spirit": "The Vanguard" }
        ]
    },
    {
        "id": "design",
        "name": "VISUAL DESIGN",
        "members": [
            { "name": "ASHISH S", "role": "Lead", "spirit": "The Luminary" },
            { "name": "Yogendra SK", "role": "Member", "spirit": "The Maestro" },
            { "name": "Thirunesh S", "role": "Member", "spirit": "The Artisan" },
            { "name": "Harish K", "role": "Member", "spirit": "The Virtuoso" },
            { "name": "Yeseswini.S", "role": "Member", "spirit": "The Pathfinder" }
        ]
    },
    {
        "id": "events",
        "name": "EVENT PLANNING",
        "members": [
            { "name": "Madhav. Ba", "role": "Member", "spirit": "The Conductor" },
            { "name": "ASHWIN R", "role": "Lead", "spirit": "The Envisioner" },
            { "name": "Pritika Rajesh Kannan", "role": "Member", "spirit": "The Spark" },
            { "name": "Vethavarna V", "role": "Member", "spirit": "The Keystone" },
            { "name": "Suraj G", "role": "Member", "spirit": "The Anchor" },
            { "name": "Kavinidhi R P", "role": "Member", "spirit": "The Beacon" },
            { "name": "Gururaaje M", "role": "Sub lead", "spirit": "The Zenith" }
        ]
    },
    {
        "id": "web",
        "name": "WEB ARCHITECTS",
        "members": [
            { "name": "B jashwanth shankar", "role": "Member", "spirit": "The Apex" },
            { "name": "Balakrishnan.R", "role": "Lead", "spirit": "The Oracle" }
        ]
    },
    {
        "id": "art",
        "name": "ART & DECORATION",
        "members": [
            { "name": "Brindha AG", "role": "Member", "spirit": "The Sage" },
            { "name": "Tharun Kumar S", "role": "Member", "spirit": "The Warden" },
            { "name": "VASUNDRA S", "role": "Member", "spirit": "The Keeper" },
            { "name": "VidhyaaVardhani Ramesh", "role": "Member", "spirit": "The Shaper" },
            { "name": "M S JOSHIKA", "role": "Member", "spirit": "The Weaver" },
            { "name": "Nithya Shiva Thirumalaivarathan", "role": "Member", "spirit": "The Pilot" },
            { "name": "Visvajith S A", "role": "Member", "spirit": "The Voyager" },
            { "name": "Harishmani E", "role": "Member", "spirit": "The Scout" },
            { "name": "Priyadharshini", "role": "Member", "spirit": "The Ranger" },
            { "name": "Harshitha R", "role": "Member", "spirit": "The Champion" },
            { "name": "A Mahathi Kavya", "role": "Member", "spirit": "The Titan" }
        ]
    },
    {
        "id": "sponsorship",
        "name": "BUSINESS PARTNERSHIPS",
        "members": [
            { "name": "Akshara Srivatsan", "role": "Member", "spirit": "The Colossus" },
            { "name": "Anton Jacob", "role": "Member", "spirit": "The Baron" },
            { "name": "KS Bharath", "role": "Lead", "spirit": "The Knight" },
            { "name": "Arpitha Paraneetharan", "role": "Member", "spirit": "The Rogue" },
            { "name": "Buvanesh Raaj B Y", "role": "Member", "spirit": "The Hunter" },
            { "name": "Shaik aadhil", "role": "Member", "spirit": "The Seeker" },
            { "name": "Athmaja Gugan", "role": "Member", "spirit": "The Nomad" },
            { "name": "Harshitha R", "role": "Member", "spirit": "The Wanderer" },
            { "name": "S. Ananthika", "role": "Member", "spirit": "The Spirit" },
            { "name": "Yaathra P", "role": "Member", "spirit": "The Soul" },
            { "name": "A Mahathi Kavya", "role": "Member", "spirit": "The Heart" },
            { "name": "V Lingesh", "role": "Member", "spirit": "The Brain" },
            { "name": "Sri Varsha S", "role": "Member", "spirit": "The Hand" }
        ]
    },
    {
        "id": "operations",
        "name": "CORE OPERATIONS",
        "members": [
            { "name": "Rushil", "role": "Member", "spirit": "The Eye" },
            { "name": "Amirthavarshini J", "role": "Member", "spirit": "The Voice" },
            { "name": "KAVIYA M", "role": "Member", "spirit": "The Echo" },
            { "name": "Anton jacob", "role": "Member", "spirit": "The Shadow" },
            { "name": "Arun D", "role": "Member", "spirit": "The Light" },
            { "name": "Meenatshi P", "role": "Member", "spirit": "The Flame" },
            { "name": "U S SANJEEVAN", "role": "Member", "spirit": "The Frost" },
            { "name": "Abdul Rahman N", "role": "Member", "spirit": "The Storm" }
        ]
    },
    {
        "id": "celebrity",
        "name": "CELEBRITY RELATIONS",
        "members": [
            { "name": "Nimal.S", "role": "Sub lead", "spirit": "The Tide" }
        ]
    }
];

function findImage(name) {
    const cleanName = name.toLowerCase().replace(/[^a-z0-9]/g, '').trim();
    const match = files.find(f => {
        const lf = f.toLowerCase().replace(/[^a-z0-9]/g, '');
        if (lf.includes(cleanName)) return true;
        // Try parts
        const parts = name.toLowerCase().split(/[. ]/);
        if (parts.length > 1 && parts.every(p => p.length > 2 && lf.includes(p.replace(/[^a-z0-9]/g, '')))) return true;
        return false;
    });
    return match ? `/members/${match}` : `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`;
}

const finalData = teamData.map(group => ({
    ...group,
    members: group.members.map(m => ({
        ...m,
        image: findImage(m.name)
    }))
}));

fs.writeFileSync('json/mapped_data.json', JSON.stringify(finalData, null, 4));
console.log('Saved');
