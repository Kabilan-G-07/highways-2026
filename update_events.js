import fs from 'fs';

const p = 'src/pages/Events.tsx';
let data = fs.readFileSync(p, 'utf8');

// Section 1: Update allEvents array (POCs, Categories, Colors)
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

if (arrayEndIndex === -1) {
    console.error("Could not find allEvents end.");
    process.exit(1);
}

const eventsStr = data.substring(arrayStartIndex - 1, arrayEndIndex);
let allEvents;
try {
    allEvents = JSON.parse(eventsStr);
} catch (e) {
    console.error("Failed to parse events JSON:", e.message);
    process.exit(1);
}

const pocUpdates = {
    1: { title: "Shoot and Broadcast", pocs: [{ name: "Akshaya", phone: "9042476961" }] },
    2: { title: "Mime", pocs: [{ name: "Mahathi", phone: "9840988831" }] },
    3: { title: "ADZAP", pocs: [{ name: "Sreenidhi", phone: "6385568214" }] },
    4: { title: "Freeze Frame", pocs: [{ name: "Janani", phone: "9840988831" }] },
    14: { title: "Channel Surfing", pocs: [{ name: "Shawn Abraham", phone: "9345985157" }] },
    15: { title: "Shipwreck", pocs: [{ name: "Shawn Abraham", phone: "9345985157" }] },
    19: { title: "Turncoat (Mathi Yosi)", pocs: [{ name: "Dharsan P", phone: "7358656668" }] },
    21: { title: "Olunga Paadu illana sprey adichiduvan", pocs: [{ name: "Ramkishore", phone: "9566952026" }] },
    20: { title: "Thirai Suzhal", pocs: [{ name: "Subash Chandra Bose", phone: "8940454275" }] },
    27: { title: "Otakumania", pocs: [{ name: "Nandhakumaran", phone: "93444 58074" }] },
    28: { title: "Greenscreen", pocs: [{ name: "Mohammed Faraaz", phone: "94459 33053" }] },
    29: { title: "Power Play Arena", pocs: [{ name: "Neha Ramganesh", phone: "98840 44954" }] },
    25: { title: "Themed Photography", pocs: [{ name: "Shreya", phone: "9445599760" }] },
    26: { title: "Frame by words", pocs: [{ name: "Raghav", phone: "63744 73882" }] },
    17: { title: "Cinequest", pocs: [{ name: "Cinequest Team", phone: "89253 10269" }] },
    18: { title: "Short Film contest", pocs: [{ name: "Sai Krishna", phone: "7397365289" }] },
    16: { title: "Movie Screening", pocs: [
        { name: "Ashwin (day 1)", phone: "98844 11202" },
        { name: "Jayasuriya(day 2)", phone: "877 899 4503" },
        { name: "Shamritha (day 3)", phone: "98840 36973" }
    ]},
    9: { title: "Who's the sus", pocs: [{ name: "Tamizh Selvan", phone: "93425 97576" }] },
    10: { title: "Money moves in your hand", pocs: [{ name: "Rasiga", phone: "95002 40988" }] },
    12: { title: "Mystry Box challenge", pocs: [{ name: "Oviya", phone: "6383672435" }] },
    13: { title: "Human Knot", pocs: [{ name: "Sakthi Purushuthaman", phone: "7305940418" }] },
    11: { title: "Treasure Hunt", pocs: [{ name: "Jegatheesh", phone: "9042685575" }] },
    7: { title: "Reverse Pictionary", pocs: [{ name: "Gayathri", phone: "8838060188" }] },
    8: { title: "Jagdish On A Mission", pocs: [{ name: "Mariam", phone: "7305711022" }] },
    34: { title: "The Royal Gambit", pocs: [{ name: "Manoj", phone: "6380693806" }] },
    33: { title: "Saregama", pocs: [{ name: "Manoj", phone: "6380693806" }] },
    5: { title: "IPL Auction", pocs: [{ name: "Buvanesh Raaj", phone: "9962371662" }] },
    6: { title: "Sorting Hat Conspiracy", pocs: [{ name: "Hannah", phone: "7305066339" }] },
    37: { title: "Solo Dance", pocs: [{ name: "Thanushka", phone: "7395973335" }] },
    38: { title: "Adaptune", pocs: [{ name: "Kheerthi", phone: "99403 18111" }] },
    39: { title: "Group Dance", pocs: [{ name: "Abinav", phone: "7338755434" }, { name: "Thanushka", phone: "7395973335" }] },
    40: { title: "Duet", pocs: [{ name: "Mridula", phone: "86678 63040" }, { name: "Nivethetha", phone: "7395973335" }] },
    22: { title: "EPL", pocs: [{ name: "Dimple", phone: "99516 61000" }] },
    23: { title: "Disasterpeneur", pocs: [{ name: "Sudish", phone: "91501 95835" }] },
    24: { title: "Startup War", pocs: [{ name: "Abijith P", phone: "63749 97429" }] },
    35: { title: "Film Auction", pocs: [{ name: "Sanjay Joshua", phone: "73057 64336" }] }
};

allEvents.forEach(e => {
    // Fill POCs and update titles from mapping
    if (pocUpdates[e.id]) {
        e.title = pocUpdates[e.id].title;
        e.pocs = pocUpdates[e.id].pocs;
    }
    
    // Save your startup manually
    if (e.id === 32 || (e.title && e.title.toLowerCase().includes("save your startup"))) {
        e.title = "Save your startup";
        e.pocs = [{ name: "Janani T", phone: "91509 88305" }];
    }

    // Update Category to Club name from description
    const desc = e.description || "";
    const clubMatch = desc.match(/this (.*?) event brings together/);
    if (clubMatch) {
        e.category = clubMatch[1];
    }
    
    // Change Day 2 colors to Pearl White (#f8f8ff)
    if (e.day === 2) {
        e.color = "#f8f8ff";
    }
});

const newEventsJSON = JSON.stringify(allEvents, null, 2);
data = data.substring(0, arrayStartIndex - 1) + newEventsJSON + data.substring(arrayEndIndex);

// Section 2: Update categoriesList & dayThemes
const uniqueClubs = ["All", ...new Set(allEvents.map(e => e.category))];
data = data.replace(/const categoriesList = \[.*?\];/, `const categoriesList = ${JSON.stringify(uniqueClubs)};`);

const d1Display = '"Sawarabi Mincho", serif';
const d1Body = '"Nunito Sans", "Segoe UI", sans-serif';

// Force all dayThemes to use Day 1 fonts and style
const themeBlocks = data.match(/{[\s\S]*?id:\s*[123][\s\S]*?}/g);
if (themeBlocks) {
    themeBlocks.forEach(block => {
        let newBlock = block;
        newBlock = newBlock.replace(/style:\s*".*?"/, 'style: "organic"');
        newBlock = newBlock.replace(/displayFont:\s*".*?"/, `displayFont: '${d1Display}'`);
        newBlock = newBlock.replace(/bodyFont:\s*".*?"/, `bodyFont: '${d1Body}'`);
        
        // Specific for Day 2 color and buttonText
        if (block.includes('id: 2')) {
            newBlock = newBlock.replace(/color:\s*".*?"/, 'color: "#f8f8ff"');
            newBlock = newBlock.replace(/buttonText:\s*".*?"/, 'buttonText: "#1c0f14"');
        }
        
        data = data.replace(block, newBlock);
    });
}

// Section 3: Fix Header Letter Spacing
data = data.replace(/letterSpacing: filter\.day === 1 \? '10px' : \(filter\.day === 3 \? '-8px' : '-4px'\)/, "letterSpacing: '10px'");

fs.writeFileSync(p, data, 'utf8');
console.log("Events updated successfully.");
