import fs from 'fs';
const rawData = `1 Shoot and Broadcast Curtain Call 1 FN CB312
2 Mime Curtain Call 2 FN Premium 400\T 4.5k MPH
3 Adzap Curtain Call 3 FN Fun - - CB301
4 Freeze Frame Curtain Call 3 AN Fun - -
5 IPL Auction Reading Club 1 FN
6 Sorting Hat Conspiracy Reading Club 3 FN Fun - - Block 5 (1st Floor)
7 Trust the Process EWB 1 FULL Standard 50\P 1.5K CB513
8 Chaos Director EWB 2 FULL Fun - - CB 304
9 Who the sus ISTD 1 FULL Fun - - CB515 & CB516
10 Money moves in your hand ISTD 2 FULL Fun - - CB515 & CB516
11 Scavenger Hunt RRC 1 FULL Fun - - CB501, 507 & 508
12 Mystry Box challenge RRC 2 FN Standard CB311 & CB314
13 Human Knot RRC 3 FN CB501 & CB502
14 Channel Surfing Speakers Forum 1 FN
15 Survival of the fittest Speakers Forum 1 FN Premium 100\P 5K Library 3rd Hall
16 Movie Screening Shortfilm 1, 2 & 3 FN Standard 30\P - Library Seminar Hall
17 Cinequest Shortfilm 2 FULL Fun - - CB521
18 Short Film contest Shortfilm 3 AN Premium Library Seminar Hall
19 Mathi Yoshi Tamil Mandram 1 FULL Fun - - CB504 & CB505
20 Thirai Suzhal Tamil Mandram 2 FN Standard 50\T 1.5k CB504 & CB505
21 Olunga Paadu illana sprey adichiduvan Tamil Mandram 3 FULL Fun - - CB504 & CB505
22 EPL ECell 1 FN Premium 150\T 4.5k Biotech Hall
23 Disasterpeneur ECell 2 AN Standard 75\T 1k CB302
24 Start up war ECell 3 FN Standard 75\T 1.5k CB303
25 Shot on Highways Photo Club 1 ONLINE Standard 100\T 1.5k CB301
26 Frame by words Photo Club 1 FN Standard 50\P 1.5k CB303
27 Otakumania Science Club 1 FN Standard 100\T 1.5K CB 321, CB322, CB323 & CB324
28 Greenscreen Science Club 2 FN Fun - - CB322 & CB323
29 Powerplay Arena Science Club 3 FN Fun - - CB313 & CB314
30 Tellus Abyss Care 1 FN Standard CB525
31 Token Takeover Care 2 FN Fun - - CB526, CB527 & CB528
32 Clash Troxphy Care 3 FN Premium CB526, CB527 & CB528
33 Saregama Rotaract 1 FULL Fun - - CB536
34 The Royal Gambit Rotaract 2 FULL Fun - - Block 5 (3rd Floor) & (Ground Floor Area)
35 Overdrive Music Club 1 Full Premium 1000\T 10K MPH
36 Crescendo Music Club 2 AN Premium 250\P 6K Library Seminar Hall
37 Solography Dance Club 1 FN Premium 150\P 4K OAT
38 Groove Chemistry Dance Club 1 AN Premium 150\P 4K OAT
39 Groovanza Dance Club 2 FN Premium 1000\T 12K OAT
40 Pairfect Dance Club 2 AN Premium 400\T 6K MPH`;

const catMap = {
    "Curtain Call": "Drama",
    "Reading Club": "Speech",
    "EWB": "Tech",
    "ISTD": "Tech",
    "RRC": "Social",
    "Speakers Forum": "Speech",
    "Shortfilm": "Media",
    "Tamil Mandram": "Cultural",
    "ECell": "Business",
    "Photo Club": "Art",
    "Science Club": "Tech",
    "Care": "Social",
    "Abyss Care": "Social",
    "Rotaract": "Social",
    "Music Club": "Music",
    "Dance Club": "Dance"
};

const images = {
    "Music": "https://images.unsplash.com/photo-1514525253361-bee8d48700df?q=80&w=1000",
    "Dance": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1000",
    "Drama": "https://images.unsplash.com/photo-1541179619977-1b0394018282?q=80&w=1000",
    "Tech": "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000",
    "Speech": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1000",
    "Media": "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000",
    "Cultural": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1000",
    "Business": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000",
    "Art": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1000",
    "Social": "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000"
};

function parseLine(line) {
    const parts = line.split(' ');
    const id = parseInt(parts[0]);
    
    let clubName = "General";
    let clubKey = "";
    for (const key of Object.keys(catMap)) {
        if (line.includes(key)) {
            clubName = key;
            clubKey = key;
            break;
        }
    }

    const titleParts = [];
    let j = 1;
    while (j < parts.length && !parts[j].includes(clubName.split(' ')[0])) {
        titleParts.push(parts[j]);
        j++;
    }
    const title = titleParts.join(' ') || "Club Event";

    let day = 1;
    const dayMatch = line.match(/\s([123])\s(?:FN|AN|FULL|Full|ONLINE)/);
    if (dayMatch) day = parseInt(dayMatch[1]);

    let time = "10:00 AM";
    if (line.includes("FN")) time = "10:00 AM";
    if (line.includes("AN")) time = "02:00 PM";
    if (line.includes("FULL") || line.includes("Full")) time = "10:00 AM";
    if (line.includes("ONLINE")) time = "Virtual";

    let regType = "Free";
    let regFee = "";
    if (line.includes("Premium") || line.includes("Standard")) {
        regType = "Paid";
        const feeMatch = line.match(/(\d+)\\[TP]/);
        if (feeMatch) regFee = "₹" + feeMatch[1] + (line.includes("\\T") ? "/Team" : "/Person");
        else regFee = "₹200";
    }

    let prizePool = "TBA";
    const prizeMatch = line.match(/(\d+(?:\.\d+)?k|K)/i);
    if (prizeMatch) prizePool = "₹" + prizeMatch[1].toUpperCase();

    let location = "Campus Venue";
    const locMatch = line.match(/(?:MPH|Library|OAT|CB\s?\d+|Block\s\d+|Seminar Hall|Biotech Hall).*/i);
    if (locMatch) location = locMatch[0].trim();

    const category = catMap[clubKey] || "Tech";

    return {
        id,
        title,
        category,
        day,
        date: "April " + (day + 8) + ", 2026",
        time,
        location,
        color: category === "Music" ? "#00d2ff" : (category === "Dance" ? "#ff0000" : "#ffb7c5"),
        image: images[category] || images["Tech"],
        description: "Focusing on " + title + ", this " + clubName + " event brings together the best minds for Highways'26.",
        rules: [
            "Mandatory registration via the Highways'26 app.",
            "Please bring your college ID for entry.",
            "Judges' decision is final.",
            "Report 15 minutes before the start time."
        ],
        prizePool,
        regType,
        regFee: regType === "Paid" ? regFee : undefined,
        teamSize: line.includes("\\T") ? "Group" : "Solo",
        pocs: [
            { name: clubName + " Team", phone: "Available at Helpdesk" }
        ]
    };
}

const events = rawData.split('\n').map(parseLine);
fs.writeFileSync('json/events_fixed.json', JSON.stringify(events, null, 2), 'utf8');
