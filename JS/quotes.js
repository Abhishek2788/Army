//....Quotes Start....
const quoteArray=["“Either I will come back after hoisting the Tricolor, or I will come back wrapped in it. But I’ll be back for sure.” – Captain Vikram Batra (Param Vir Chakra)", "“Our flag does not fly because the wind moves it; it flies with the last breath of each soldier who died protecting it.”", "“Bravery is not the absence of fear, but the ability to overcome it.” – General Pran Nath Thapar.", "“Soldiers do not fight because they hate what is in front of them. They fight because they love what is behind them.” – G.K. Chesterton.", "“No Sir, I will not abandon my tank. My gun is still working, and I will get these bastards.” – Lieutenant Arun Khetarpal (Param Vir Chakra).", "“Some goals are so worthy; it’s glorious even to fail.” – Capt Manoj Kumar Pandey (Param Vir Chakra).", "“We are a nation of millions, and our defense is our army’s finest.”", "“The strength of the nation lies in the well-being of its soldiers.”", "“For our tomorrow, they gave their today.”"];
function randomQuoteGen(){
    const quoteP=document.getElementById("quotes-para");
    const len=quoteArray.length;
    quoteP.innerHTML=quoteArray[parseInt(Math.random(0,1)*len)];
}
setInterval(randomQuoteGen,10000);

//....Quotes End....

//....News Start....

const map = new Map();
map.set('https://www.ndtv.com/india-news/2-terrorists-killed-as-army-prevents-infiltration-attempt-in-j-ks-kupwara-6133157', '2 Terrorists Killed As Army Prevents Infiltration Attempt In J&K\'s Kupwara');
map.set('https://www.ndtv.com/india-news/pm-modi-chairs-security-meet-amid-rising-terror-attacks-in-jammu-6132122', 'PM Modi Chairs Security Meet Amid Rising Terror Attacks In Jammu');
map.set('https://www.indiandefensenews.in/2024/07/tejas-mk-1a-buyers-at-risk-fighter.html', 'TEJAS MK-1A BUYERS AT RISK – THE FIGHTER ‘STRANDED’ WITHOUT AN ENGINE: INT\'L. MEDIA');
map.set('https://www.indiatoday.in/magazine/defence/story/20240311-iafs-transport-infra-focus-swift-tactical-airlifts-to-the-border-2509026-2024-03-01', 'IAF\'s transport, infra focus | Swift tactical airlifts to the border');
map.set('https://www.indiatoday.in/magazine/defence/story/20240708-revisiting-agnipath-2559460-2024-06-28', 'Revisiting Agnipath');
map.set('https://economictimes.indiatimes.com/news/defence/12-naxals-killed-in-encounter-with-police-on-maharashtra-chhattisgarh-border/articleshow/111815083.cms', '12 Naxals killed in encounter with police on Maharashtra-Chhattisgarh border');
map.set('https://economictimes.indiatimes.com/news/defence/wont-let-terrorists-escape-vdgs-assisting-security-forces-track-ultras-in-j-ks-doda/articleshow/111813965.cms', 'Won\'t let terrorists escape: VDGs assisting security forces track ultras in J-K\'s Doda');
map.set('https://economictimes.indiatimes.com/news/defence/ladakh-5-army-personnel-killed-during-tank-exercise-near-line-of-actual-control/videoshow/111358180.cms', 'Ladakh: 5 Army personnel killed during tank exercise near Line of Actual Control');
map.set('https://www.indiatoday.in/magazine/defence/story/20240226-reforms-do-or-die-for-the-drdo-2502973-2024-02-16', 'Reforms | Do or die for the DRDO');
map.set('https://www.indiatoday.in/magazine/defence/story/20240212-replacing-insas-in-search-of-a-good-rifle-2496641-2024-02-02', 'Replacing INSAS | In search of a good rifle');
map.set('https://www.indiatoday.in/magazine/defence/story/20240212-replacing-insas-in-search-of-a-good-rifle-2496641-2024-02-02', 'IAF | A force to rule the skies');
map.set('https://www.indiatoday.in/magazine/defence/story/20230724-india-us-drone-deal-a-long-drone-process-2406442-2023-07-14', 'India-US drone deal | A long drone process');
map.set('https://www.indiatoday.in/defence/story/sri-lankan-navy-chief-visit-india-review-pop-naval-academy-2383738-2023-05-24', 'Sri Lanka Navy Commander Vice Admiral Perera calls on Indian Navy chief');
map.set('https://www.indiatoday.in/defence/story/indian-navy-ins-vikrant-mig-29-k-light-landing-2384444-2023-05-25', 'Indian Navy gets \'Aatmanirbhar\' push as Mig-29K makes maiden night landing on INS Vikrant');


const keysE=Array.from(map.keys());
const valuesE=Array.from(map.values());
const lenA=keysE.length;

function newsGen(){
    for (let i = 0; i < lenA; i++) {  
        const para=document.createElement("a");
        const hrtag=document.createElement("hr");
        para.setAttribute("href", keysE[i]);
        para.innerHTML=valuesE[i];
        document.querySelector(".news").appendChild(hrtag);
        document.querySelector(".news").appendChild(para);
    }
}
newsGen();





