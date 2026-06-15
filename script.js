const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        themeToggle.textContent = "☀️";
    }else{
        themeToggle.textContent = "🌙";
    }

});

/* ==========================
   WATCH DATABASE
========================== */
const watches = [

{
name:"Rolex Datejust",
brand:"Rolex",
style:"Dress",
movement:"Automatic",
price:"$10,000",
image:"https://images.unsplash.com/photo-1773414685933-bfc3ccf89a3c?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=ph-c-sang-8PzBx71aecg-unsplash.jpg",
description:"An iconic luxury dress watch known for timeless styling and everyday elegance."
},

{
name:"Rolex Submariner",
brand:"Rolex",
style:"Diver",
movement:"Automatic",
price:"$12,000",
image:"https://images.unsplash.com/photo-1670404160620-a3a86428560e?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=say-s-vRcSC-UN3yI-unsplash.jpg",
description:"One of the world's most recognized dive watches with exceptional durability."
},

{
name:"Rolex Explorer",
brand:"Rolex",
style:"Sport",
movement:"Automatic",
price:"$8,500",
image:"https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=carlos-esteves-Ae3OHpJfngc-unsplash.jpg",
description:"Built for adventure and exploration while maintaining Rolex luxury standards."
},

{
name:"Omega Seamaster",
brand:"Omega",
style:"Diver",
movement:"Automatic",
price:"$6,500",
image:"https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1200&q=80",
description:"A premium dive watch combining Swiss precision with ocean-inspired design."
},

{
name:"Omega Speedmaster",
brand:"Omega",
style:"Sport",
movement:"Mechanical",
price:"$7,500",
image:"https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?auto=format&fit=crop&w=1200&q=80",
description:"The legendary Moonwatch celebrated for its space exploration heritage."
},

{
name:"Omega Constellation",
brand:"Omega",
style:"Dress",
movement:"Automatic",
price:"$5,800",
image:"https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&w=1200&q=80",
description:"Refined Swiss luxury designed for those who appreciate elegance and precision."
},

{
name:"Tudor Black Bay",
brand:"Tudor",
style:"Diver",
movement:"Automatic",
price:"$4,000",
image:"https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?auto=format&fit=crop&w=1200&q=80",
description:"A vintage-inspired dive watch with modern reliability and strong value."
},

{
name:"Tudor Pelagos",
brand:"Tudor",
style:"Diver",
movement:"Automatic",
price:"$5,200",
image:"https://images.unsplash.com/photo-1619134778706-7015533a6150?auto=format&fit=crop&w=1200&q=80",
description:"Titanium professional dive watch built for serious underwater performance."
},

{
name:"Tudor Royal",
brand:"Tudor",
style:"Dress",
movement:"Automatic",
price:"$2,800",
image:"https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=1200&q=80",
description:"Elegant everyday luxury watch offering classic styling and versatility."
},

{
name:"Longines HydroConquest",
brand:"Longines",
style:"Diver",
movement:"Automatic",
price:"$1,900",
image:"https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1200&q=80",
description:"A refined Swiss diver balancing sporty functionality with elegant design."
},

{
name:"Longines Master Collection",
brand:"Longines",
style:"Dress",
movement:"Automatic",
price:"$2,500",
image:"https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=1200&q=80",
description:"Sophisticated dress watch showcasing traditional Swiss watchmaking heritage."
},

{
name:"Longines Spirit",
brand:"Longines",
style:"Sport",
movement:"Automatic",
price:"$3,200",
image:"https://images.unsplash.com/photo-1617043786394-f977fa12eddf?auto=format&fit=crop&w=1200&q=80",
description:"Pilot-inspired sports watch combining precision engineering with adventure."
},

{
name:"Seiko Presage",
brand:"Seiko",
style:"Dress",
movement:"Automatic",
price:"$900",
image:"https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=1200&q=80",
description:"Beautiful Japanese craftsmanship with exceptional value and detail."
},

{
name:"Seiko Prospex",
brand:"Seiko",
style:"Diver",
movement:"Automatic",
price:"$800",
image:"https://images.unsplash.com/photo-1772638904187-1d1e8f1452f3?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=puneet-kaul-P57GPFuXd-Y-unsplash.jpg",
description:"Reliable tool watch designed for adventure, diving, and exploration."
},

{
name:"Seiko 5 Sports",
brand:"Seiko",
style:"Sport",
movement:"Automatic",
price:"$400",
image:"https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&w=1200&q=80",
description:"Affordable sports watch delivering durability and everyday versatility."
},

{
name:"Tissot PRX",
brand:"Tissot",
style:"Sport",
movement:"Quartz",
price:"$650",
image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
description:"Modern integrated bracelet watch with contemporary styling and comfort."
},

{
name:"Tissot Gentleman",
brand:"Tissot",
style:"Dress",
movement:"Automatic",
price:"$850",
image:"https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&w=1200&q=80",
description:"Elegant everyday watch offering Swiss quality at an accessible price."
},

{
name:"Tissot Seastar",
brand:"Tissot",
style:"Diver",
movement:"Quartz",
price:"$700",
image:"https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=1200&q=80",
description:"Sporty diver featuring strong performance and impressive water resistance."
},

{
name:"TAG Heuer Carrera",
brand:"TAG Heuer",
style:"Sport",
movement:"Automatic",
price:"$3,500",
image:"https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&w=1200&q=80",
description:"Motorsport-inspired chronograph delivering performance and prestige."
},

{
name:"TAG Heuer Formula 1",
brand:"TAG Heuer",
style:"Sport",
movement:"Quartz",
price:"$1,700",
image:"https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1200&q=80",
description:"Bold racing-inspired design with modern sporty character."
},

{
name:"TAG Heuer Aquaracer",
brand:"TAG Heuer",
style:"Diver",
movement:"Automatic",
price:"$3,000",
image:"https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=1200&q=80",
description:"Professional dive watch built for active lifestyles and adventure."
},

{
name:"Citizen Promaster",
brand:"Citizen",
style:"Diver",
movement:"Quartz",
price:"$350",
image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
description:"Reliable professional diver offering excellent value and functionality."
},

{
name:"Citizen Tsuyosa",
brand:"Citizen",
style:"Dress",
movement:"Automatic",
price:"$450",
image:"https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?auto=format&fit=crop&w=1200&q=80",
description:"Stylish automatic watch bringing luxury aesthetics at an affordable price."
},

{
name:"Citizen Eco-Drive",
brand:"Citizen",
style:"Sport",
movement:"Quartz",
price:"$500",
image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
description:"Solar-powered technology combined with dependable everyday performance."
}

];
/* ==========================
   MATCH ENGINE
========================== */

const watchForm = document.getElementById("watchForm");

if (watchForm) {

watchForm.addEventListener("submit", function(e){

e.preventDefault();

const brand = document.getElementById("brand").value;
const style = document.getElementById("style").value;
const movement = document.getElementById("movement").value;
const budget = document.getElementById("budget").value;

const results = document.getElementById("results");

/* ==========================
   PRICE HELPER
========================== */

function getPrice(price){
return parseInt(price.replace(/[$,]/g,""));
}

/* ==========================
   BUDGET CHECK
========================== */

function budgetMatch(watch){

const price = getPrice(watch.price);

if(budget === "Under $500"){
return price < 500;
}

if(budget === "$500 - $1000"){
return price >= 500 && price <= 1000;
}

if(budget === "$1000 - $5000"){
return price > 1000 && price <= 5000;
}

if(budget === "$5000+"){
return price > 5000;
}

return false;

}

/* ==========================
   SCORING SYSTEM
========================== */

let recommendations = watches.map(watch => {

let score = 0;

/* Brand */

if(
brand !== "No Preference" &&
watch.brand === brand
){
score += 4;
}

/* Style */

if(
watch.style === style
){
score += 3;
}

/* Movement */

if(
watch.movement === movement
){
score += 2;
}

/* Budget */

if(
budgetMatch(watch)
){
score += 3;
}

return {
...watch,
score
};

});

/* ==========================
   EXACT MATCH CHECK
========================== */

let exactMatches = recommendations.filter(
watch => watch.score >= 8
);

let heading = "";

if(exactMatches.length > 0){

heading = `
<div class="match-message success">

<h3>Perfect Match Found</h3>

<p>
These watches closely match your selected preferences.
</p>

</div>
`;

recommendations = exactMatches;

}else{

heading = `
<div class="match-message">

<h3>No Exact Match Found</h3>

<p>
Based on your preferences, these are the closest alternatives available in our collection.
</p>

</div>
`;

recommendations = recommendations
.sort((a,b) => b.score - a.score)
.filter(watch => watch.score > 0);

}

/* ==========================
   NO RESULTS
========================== */

if(recommendations.length === 0){

results.innerHTML = `

<div class="no-match">

<h3>No Match Found</h3>

<p>
Try adjusting your preferences to discover more watches.
</p>

</div>

`;

return;

}

/* ==========================
   LIMIT RESULTS
========================== */

recommendations = recommendations.slice(0,3);

/* ==========================
   OUTPUT
========================== */

results.innerHTML = `

${heading}

${recommendations.map(watch => `

<div class="watch-card">

<img src="${watch.image}" alt="${watch.name}">

<div class="watch-info">

<h3>${watch.name}</h3>

<p class="watch-brand">
${watch.brand}
</p>

<p class="watch-price">
${watch.price}
</p>

<p class="watch-description">
${watch.description}
</p>

<button class="add-btn">
Add To Collection
</button>

</div>

</div>

`).join("")}

<div class="results-disclaimer">

Images shown are for illustrative purposes only and may not represent the exact watch model. For official product photography, specifications, pricing, and availability, please refer to the manufacturer's website.

</div>

`;
/* ==========================
   SAVE TO COLLECTION
========================== */

document.querySelectorAll(".add-btn").forEach((button,index)=>{

button.addEventListener("click",()=>{

const selectedWatch = recommendations[index];

let collection =
JSON.parse(localStorage.getItem("watchCollection")) || [];

/* duplicate avoid */

const alreadyExists = collection.some(
watch => watch.name === selectedWatch.name
);

if(alreadyExists){

alert("This watch is already in your collection.");
return;

}

collection.push(selectedWatch);

localStorage.setItem(
"watchCollection",
JSON.stringify(collection)
);

alert("Watch added to collection.");

});

});

});

}
const yearElement = document.getElementById("year");

if (yearElement) {
   yearElement.textContent = new Date().getFullYear();
}
