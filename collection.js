/* ==========================
   DARK MODE
========================== */

const themeToggle = document.getElementById("themeToggle");

if(themeToggle){

themeToggle.addEventListener("click",()=>{

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){
themeToggle.textContent = "☀️";
}else{
themeToggle.textContent = "🌙";
}

});

}

/* ==========================
   LOAD COLLECTION
========================== */

const collectionResults =
document.getElementById("collectionResults");

let collection =
JSON.parse(localStorage.getItem("watchCollection")) || [];

/* ==========================
   EMPTY STATE
========================== */

if(collection.length === 0){

collectionResults.innerHTML = `

<div class="collection-empty">

<h3>Your Collection Is Empty</h3>

<p>
Start exploring watches and add your favorites from the Match page.
</p>

<a href="match.html" class="collection-btn">

Find Your Match

</a>

</div>

`;

}else{

renderCollection();

}

/* ==========================
   RENDER COLLECTION
========================== */

function renderCollection(){

collectionResults.innerHTML = `

${collection.map((watch,index)=>`

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

<button
class="remove-btn"
data-index="${index}"
>

Remove

</button>

</div>

</div>

`).join("")}

<div class="clear-collection-wrap">

<button
class="clear-collection-btn"
id="clearCollection"
>

Clear Collection

</button>

</div>

`;

attachEvents();
/* ==========================
   WATCH PERSONALITY
========================== */

const personalityCard =
document.getElementById("personalityCard");

if(personalityCard && collection.length > 0){

let dressCount = 0;
let diverCount = 0;
let sportCount = 0;

collection.forEach(watch => {

if(watch.style === "Dress"){
dressCount++;
}

if(watch.style === "Diver"){
diverCount++;
}

if(watch.style === "Sport"){
sportCount++;
}

});

let title = "";
let description = "";

if(
dressCount >= diverCount &&
dressCount >= sportCount
){

title = "The Refined Classicist";

description =
"You appreciate elegance, craftsmanship, and timeless design. Your collection reflects a preference for sophisticated timepieces that never go out of style.";

}

else if(
diverCount >= dressCount &&
diverCount >= sportCount
){

title = "The Adventurer";

description =
"You value durability, reliability, and performance. Your collection suggests a passion for exploration and watches built for every challenge.";

}

else{

title = "The Modern Enthusiast";

description =
"You enjoy versatility, innovation, and contemporary design. Your collection reflects a balanced appreciation for style and functionality.";

}

personalityCard.innerHTML = `

<h3>
 ${title}
</h3>

<p>
${description}
</p>

`;

}

}

/* ==========================
   REMOVE WATCH
========================== */

function attachEvents(){

document.querySelectorAll(".remove-btn")
.forEach(button=>{

button.addEventListener("click",()=>{

const index =
button.getAttribute("data-index");

collection.splice(index,1);

localStorage.setItem(
"watchCollection",
JSON.stringify(collection)
);

if(collection.length === 0){

collectionResults.innerHTML = `

<div class="collection-empty">

<h3>Your Collection Is Empty</h3>

<p>
Start exploring watches and add your favorites from the Match page.
</p>

<a href="match.html" class="collection-btn">

Find Your Match

</a>

</div>

`;

}else{

renderCollection();

}

});

});

/* ==========================
   CLEAR COLLECTION
========================== */

const clearBtn =
document.getElementById("clearCollection");

if(clearBtn){

clearBtn.addEventListener("click",()=>{

const confirmed =
confirm(
"Are you sure you want to clear your entire collection?"
);

if(!confirmed) return;

localStorage.removeItem(
"watchCollection"
);

collection = [];

collectionResults.innerHTML = `

<div class="collection-empty">

<h3>Your Collection Is Empty</h3>

<p>
Start exploring watches and add your favorites from the Match page.
</p>

<a href="match.html" class="collection-btn">

Find Your Match

</a>

</div>

`;
personalityCard.innerHTML = "";

});

}

}