/* =========================
LOADER
========================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader =
        document.getElementById("loader");

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 1500);

    }, 2500);

});


/* =========================
OPEN SURPRISE
========================= */

const openBtn = document.getElementById("openBtn");
const bgMusic = document.getElementById("bgMusic");

bgMusic.volume = 0.4;

openBtn.addEventListener("click", () => {

    bgMusic.play();

    document.getElementById("gallery")
    .scrollIntoView({
        behavior:"smooth"
    });

});


/* =========================
GALLERY REVEAL
========================= */

const cards =
document.querySelectorAll(
".gallery-card"
);

const galleryObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const allCards =
entry.target.parentElement
.children;

Array.from(allCards)
.forEach((card,index)=>{

setTimeout(()=>{

card.classList.add("show");

},index * 150);

});

}

});

},

{
threshold:0.15
}

);

cards.forEach(card=>{

galleryObserver.observe(card);

});


/* =========================
SECTION REVEAL
========================= */

const sections =
document.querySelectorAll(
".memory-section, .wish-section"
);

const sectionObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add(
"show"
);

}

});

},

{
threshold:0.2
}

);

sections.forEach(section=>{

sectionObserver.observe(
section
);

});

/* =========================
MEMORY SLIDER
========================= */

const memories =
document.querySelectorAll(
".memory-wrapper"
);

const nextBtn =
document.querySelector(".next");

const prevBtn =
document.querySelector(".prev");

let current = 0;

function showMemory(index){

    memories.forEach(memory=>{

        memory.classList.remove("active");

    });

    memories[index]
    .classList.add("active");

}

nextBtn.addEventListener("click",()=>{

    current++;

    if(current >= memories.length){
        current = 0;
    }

    showMemory(current);

});

prevBtn.addEventListener("click",()=>{

    current--;

    if(current < 0){
        current = memories.length - 1;
    }

    showMemory(current);

});

showMemory(current);