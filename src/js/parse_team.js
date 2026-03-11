
import fs from 'fs';
const rawData = `ARIVUNITHI R	2127230501016	7604866729	Computer Science	A	III	Marketing and Sales	Lead	https://drive.google.com/open?id=12_I8kiRr-9NL8GmIxMO70z_x9BJtb_eX
Sunil kumar v	2127230401022	6381138002	Civil	A	III	Marketing and Sales	Member	https://drive.google.com/open?id=1abH4Cqmr7odvNvZGe1aWsbGL1IFzUX34
M.logeshwaran	2127240701086	7418881692	ECE	B	II	Marketing and Sales	Member	https://drive.google.com/open?id=1yUHLcBTyTSZfYWH2M7uVh_5hGMiyR9eP
ASHISH S	2127220501023	9360451022	Computer Science	A	IV	Design	Lead	https://drive.google.com/open?id=1dVYgY5Nhs9m1qFxIJb7kQwDQxsjVh7iO
Madhav. Ba	2127241002016	9345475286	Mech and Auto	B	II	Event Planning & Co-ordination	Member	https://drive.google.com/open?id=16dwL2SOJpcWqVWij49J5OPixSIh2qJLB
Santhoshkumar C 	2127240601084	9080083869	EEE	B	II	Marketing and Sales	Member	https://drive.google.com/open?id=1Zn2n2_qBRsyKB0MF5mDod6U36cHwRBzb
ASHWIN R	2127220701019	7010862355	ECE	A	IV	Event Planning & Co-ordination	Lead	https://drive.google.com/open?id=1tyfZXdnk7iSlbX3fgq3xcAJ54H9jirvS
Yogendra SK	2127241001056	8838773569	Mech	A	II	Design	Member	https://drive.google.com/open?id=1yga_2o6bmHMNgLXliXJXjPKGJ2jp6rRe
B jashwanth shankar 	2127240501030	9791101300	Computer Science	A	II	Web team	Member	https://drive.google.com/open?id=1cQmXdq4opXho3DWz3euBC3xrMd2lU-0a
Brindha AG 	2127241002005	8072051611	Mech and Auto	A	II	Art & Decoration	Member	https://drive.google.com/open?id=1fUW6K65apskQn1u8UsCphoz6NYPEMOVT
Tharun Kumar S 	2127250201048	8248749968	Biotechnology	A	I	Art & Decoration	Member	https://drive.google.com/open?id=14DexFpOLsttwNNRWc5Mtxxjaycawf-JL
Thirunesh S	2025MN0533	7448806555	Mech and Auto	Option 1	I	Design	Member	https://drive.google.com/open?id=1cQUlrS6kRx1-8taF_A512hF0K7Pc9XEh
Pritika Rajesh Kannan 	2127250701144	7397406074	ECE	C	I	Event Planning & Co-ordination	Member	https://drive.google.com/open?id=1kzFiBqGR1M5h9Iv5ZTVLqewVG159ZoU5
Vethavarna V	2127250701219	7708445332	ECE	D	I	Event Planning & Co-ordination	Member	https://drive.google.com/open?id=12RjqG3aujpJTz0mi0YkKahkFo_rq4Gif
VASUNDRA S	2127250502108	7603899771	AI & DS	B	I	Art & Decoration	Member	https://drive.google.com/open?id=1NR_58QgLGip1aGP2N6hTAUA8NjtpuYW4
VidhyaaVardhani Ramesh 	2127250502109	9952933836	AI & DS	B	I	Art & Decoration	Member	https://drive.google.com/open?id=1xH8eoyMg5hasvwGcUzyHP03uhhaOT7DP
Akshara Srivatsan	2127240501009	9150803126	Computer Science	A	II	Sponsorship	Member	https://drive.google.com/open?id=1xCMLd3RleFiSc4XpBRxDPINyPI-EvWwm
Harish K	2127240502027	9363924520	AI & DS	A	II	Design	Member	https://drive.google.com/open?id=1G86LqOYikjBoIq3LxZLfcdvgpMLre0VL
M S JOSHIKA 	2127250501114	8072650771	Computer Science	C	I	Art & Decoration	Member	https://drive.google.com/open?id=1D-5-8e2qWJkzAHrcv1V6ytdWCeYXYdos
Rushil	2127230201042	9176988788	Biotechnology	Option 1	III	Operations	Member	https://drive.google.com/open?id=1QX8v_DDbT-BuRjlNRnLVkIDr2k46-fh9
Amirthavarshini J 	2127230501011	7871010999	Computer Science	A	III	Operations	Member	https://drive.google.com/open?id=1N5M7wmvi1CchMNYzIY7iTUmeGGr2obLj
Balakrishnan.R	2127230502016	9444543801	AI & DS	A	III	Web team	Lead	https://drive.google.com/open?id=1wG-tzyLIdejrzLXnN7VsgQXzryicrWGk
KAVIYA M 	2127240501082	9786132151	Computer Science	B	II	Operations	Member	https://drive.google.com/open?id=1DtVpP-aKby8lNEEOg-scx9t04m0c2TCS
Anton Jacob 	2127241001010	6381822633	Mech	Option 1	II	Sponsorship	Member	https://drive.google.com/open?id=1TLf36SFit_OoOrWSPmVcuvbMfwc7z7L6
KS Bharath	2127221002007	8428070340	Mech and Auto	A	IV	Sponsorship	Lead	https://drive.google.com/open?id=10c19XLUcyfQp3bZqMQzJ_qUwjiMjwXea
SAISUNDAR S 	2127240601082	7397412315	EEE	B	II	Marketing and Sales	Member	https://drive.google.com/open?id=1UkmP9536Mt_QkShLI6P1XSrQ3iFR-jko
NARAEN KARTICK A	2127230401016	9384858563	Civil	A	III	Marketing and Sales	Sub lead	https://drive.google.com/open?id=1x-dtvzYvNQz9WPLbAfe4s7LF_hBnxBtg
C Dhinesh	2127230501035	9445399983	Computer Science	A	III	Marketing and Sales	Member	https://drive.google.com/open?id=1QAXLykgzntpF0LicYJ-AVUQsTmcQPFIO
Yuvakannan D	2127250501266	9894781390	Computer Science	E	I	Marketing and Sales	Member	https://drive.google.com/open?id=1l3Kr6F77pWKPHBcp9GhTLxR15nTotzFT
Nithya Shiva Thirumalaivarathan 	2127250501143	8015740382	Computer Science	C	I	Art & Decoration	Member	https://drive.google.com/open?id=1U53ArPlXHlohE-L40xMWrucsQg18Tg8V
RB YUVAN	2127240701128	9361320482	ECE	C	II	Marketing and Sales	Member	https://drive.google.com/open?id=1t2zGrPXg0Orxu7kWXEDkhA31qukcnUiy
Arpitha Paraneetharan	2127240501017	9342486131	Computer Science	A	II	Sponsorship	Member	https://drive.google.com/open?id=1ZIekKjzswTK8NyBckYUPOeGbWuOsUV9B
Veeraiah V 	2127240301044	9789859844	Chemical	A	II	Marketing and Sales	Member	https://drive.google.com/open?id=1lQC3EB7dAgNcG2xo0ge3QUls4jvut-sB
Suraj G	2127250801096	9941718875	IT	B	I	Event Planning & Co-ordination	Member	https://drive.google.com/open?id=1aHBu0205zd6l4KiTf8ASurcTzGjaHdZu
Anton jacob 	2127241001010	6381822633	Mech	Option 1	II	Operations	Member	https://drive.google.com/open?id=1ME_mu1F40gyWHAS9h8Tduu0kfKRmXdGQ
Madhan Balaji A 	2127241001026	9488124274	Mech	A	II	Marketing and Sales	Member	https://drive.google.com/open?id=1flZZVY0vrjvvSRZ5avLiX5fo5bNOFYGt
Visvajith S A 	20250701232	9345325604	ECE	D	I	Art & Decoration	Member	https://drive.google.com/open?id=1zvztBpUDN6PYaGIA30NUKyoVHf3I1sLz
Kavinidhi R P	2127230502057	8754458597	AI & DS	A	III	Event Planning & Co-ordination	Member	https://drive.google.com/open?id=1j0t7o7O2G0CuHosGg8xfrQnBKhgNnYPL
Arun D 	2127230701013	9043572181	ECE	A	III	Operations	Member	https://drive.google.com/open?id=1KCfKHp61sWl88Li5IaEcJCUyjoIINipy
Meenatshi P	2127250501120	6374825792	Computer Science	C	I	Operations	Member	https://drive.google.com/open?id=1LQi7lg4mPERHL_BdAptjd9Z4zIU2FDDU
Dayaalan K T	2127230501027	8438243550	Computer Science	A	III	Marketing and Sales	Member	https://drive.google.com/open?id=1auyX6NQd5TtnVpxB_y12kVI0L7UE1rSz
Nimal.S 	2127230601054	9500774210	EEE	B	III	Celebrity	Sub lead	https://drive.google.com/open?id=17cXpm9rWnaCFsTqiz9erRcCGC89POOfs
Buvanesh Raaj B Y	2127241001013	9962371662	Mech	Option 1	II	Sponsorship	Member	https://drive.google.com/open?id=1eWZKAYcW3htwRT1PNoe-mGTyiPj9toX-
Sucharitha Kapuluru 	2127250502101	9952766878	AI & DS	B	I	Marketing and Sales	Member	https://drive.google.com/open?id=1mybLulv72DkLL2gpi3zJPk6Mshhvv8DJ
Harishmani E	2127250501069	6369305412	Computer Science	B	I	Art & Decoration	Member	https://drive.google.com/open?id=1AU3x8uYIZdXkl2tXRUGHRndXJVzm7N5N
Gururaje M	2127220401006	9962491415	Civil	A	IV	Event Planning & Co-ordination	Sub lead	https://drive.google.com/open?id=1hD85RYBikkm2m9sR3VQFkSeRHsK5ZgWi
Shaik aadhil	2127240502082	9840981432	AI & DS	B	II	Sponsorship	Member	https://drive.google.com/open?id=1l3MpmM5EJlGQY06GS_I02ad8BEsXTlNA
U S SANJEEVAN	2127250601101	7305236854	EEE	B	I	Operations	Member	https://drive.google.com/open?id=1nFStjN3ul5CJcjs0ODzTXFqOz8iJo6Sa
Athmaja Gugan	2127240701018	9790781654	ECE	A	II	Sponsorship	Member	https://drive.google.com/open?id=19nhxTPCAVZQgB5fj296JdnL5s66z7Gol
Priyadharshini 	2127250502080	8610669152	AI & DS	B	I	Art & Decoration	Member	https://drive.google.com/open?id=1ayrI1XVpgZ5b4qncyLkw1ES11qES5jn7
Harshitha R	2127250701064	9840738712	ECE	B	I	Art & Decoration	Member	https://drive.google.com/open?id=1QFtVm3hhWNt66DcqGFDvwfWbPleodFCT
Harshitha R	2127250701064	9840738712	ECE	B	I	Sponsorship	Member	https://drive.google.com/open?id=1lc30aAFmfntrlFfW9hmZtWaoYfT8SuMT
S. Ananthika	2127250502086	9940488727	AI & DS	B	I	Sponsorship	Member	https://drive.google.com/open?id=19sR55MesIi293jaiOErpvmSmsfixeLf1
Yeseswini.S	2127230502122	9585119687	AI & DS	B	III	Design	Member	https://drive.google.com/open?id=17xkrAcbPC6IDoFXNQPGorvkLT0hdvnbi
Sucharitha Kapuluru 	2127250502101	9952766878	AI & DS	B	I	Marketing and Sales	Member	https://drive.google.com/open?id=1QnQkyLKkzqCOUNVJS5dHqgMinfEOoRfX
Yaathra P	2127250501263	9543221740	Computer Science	E	I	Sponsorship	Member	https://drive.google.com/open?id=1dsR8H-2kFPNL76Bxvc1LfaPz9IorDpRx
Roshan M	2127220701116	9841092274	ECE	C	IV	Marketing and Sales	Member	https://drive.google.com/open?id=11J56vHwapqcpoSC46rv5vIdc0XeQtnpX
A Mahathi Kavya 	2127250701003	9043010710	ECE	A	I	Art & Decoration	Member	https://drive.google.com/open?id=1ZE-PpmCFv_WKJFN5HEvR4hQX0Oc0N_jK
A Mahathi Kavya 	2127250701003	9043010710	ECE	A	I	Sponsorship	Member	https://drive.google.com/open?id=1rKzst3NYloJihkp3uTckjbxvx82PnCIv
V Lingesh 	2127250301056	8122663402	Chemical	A	I	Sponsorship	Member	https://drive.google.com/open?id=1FfFYP6ZYAFLZtshUY1EOsMeGzPjVoWzA
Abdul Rahman N 	2127230101001	9342618717	Automobile	A	III	Operations	Member	https://drive.google.com/open?id=1tTh8Odu-2Kdsc_izqpQIc-vYQhO7nYMe
Abdul Rahman N	2127230101001	9342618717	Automobile	A	III	Operations	Member	https://drive.google.com/open?id=1hRU5HWK6YhWl4zTehbuqftynnpdpvqNA
VASANTH K N	2025ad0722	9500000607	AI & DS	B	I	Marketing and Sales	Member	https://drive.google.com/open?id=1_MAIJlIL2ihyG80djl5y-LtiZcDx3N6l
AKSHAY V	2127231001005	9941905288	Mech	A	III	Marketing and Sales	Sub lead	https://drive.google.com/open?id=1Oza0HyeiVo0-P5AkE-SZGitF52QMhuFu
Sri Varsha S	2127250501227	9150208666	Computer Science	E	I	Sponsorship	Member	https://drive.google.com/open?id=1xRHhlLrTy9zbrAKtllBuJURrLgBB0-vx`;

const wingMapping = {
    "Marketing and Sales": { id: "marketing", name: "MARKETING & SALES" },
    "Design": { id: "design", name: "VISUAL DESIGN" },
    "Event Planning & Co-ordination": { id: "events", name: "EVENT PLANNING" },
    "Web team": { id: "web", name: "WEB ARCHITECTS" },
    "Art & Decoration": { id: "art", name: "ART & DECORATION" },
    "Sponsorship": { id: "sponsorship", name: "BUSINESS PARTNERSHIPS" },
    "Operations": { id: "operations", name: "CORE OPERATIONS" },
    "Celebrity": { id: "celebrity", name: "CELEBRITY RELATIONS" }
};

const spirits = [
    "The Visionary", "The Architect", "The Catalyst", "The Strategist", 
    "The Creative", "The Engine", "The Pulse", "The Guardian",
    "The Navigator", "The Maven", "The Craftsman", "The Pioneer"
];

function getDriveId(url) {
    const match = url.match(/[?&]id=([^&]+)/);
    return match ? match[1] : "";
}

const lines = rawData.split('\n').filter(l => l.trim());
const grouped = {};

lines.forEach(line => {
    const parts = line.split('\t');
    if (parts.length < 9) return;
    const [name, id, phone, dept, section, year, wing, role, photoLink] = parts;
    const cleanWing = wing.trim();
    const wingInfo = wingMapping[cleanWing];
    if (!wingInfo) return;

    if (!grouped[wingInfo.id]) {
        grouped[wingInfo.id] = {
            id: wingInfo.id,
            name: wingInfo.name,
            members: []
        };
    }

    const driveId = getDriveId(photoLink.trim());
    grouped[wingInfo.id].members.push({
        name: name.trim(),
        role: role.trim(),
        spirit: spirits[Math.floor(Math.random() * spirits.length)],
        image: driveId ? "https://lh3.googleusercontent.com/d/" + driveId : "https://api.dicebear.com/7.x/avataaars/svg?seed=" + name.trim()
    });
});

const teamData = Object.values(grouped);
fs.writeFileSync('json/teamData_final.json', JSON.stringify(teamData, null, 4));
console.log('Done');
