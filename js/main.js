// 
// set episodes
// 
const episodesContainer = document.getElementById("episodes");

var episodes = String.raw`Nightmare
Conor keeps having nightmare, he meets a monster at 12:07. Conor is just a boy, but his mum is facing cancer, and he also faces bully in school. How will he get out of that?
Bad Grandma
Conor met his grandma, who he hates a lot. The monster will also tell him 3 tales, and Conor will tell the monster one at last.
First Tale
Conor heard the first tale, its a tale about a young prince and a evil queen, but in fact the prince is evil, but queen is nice. Conor doesn’t like the story because it have a bad ending.
Second Tale
Conor met his dad, his dad want Conor to come to Los Angels with him, but Conor doesn’t want to. Meanwhile, the monster told him the second tale.
No Clock For Ya
As the monster told him the second tale, Conor also smashed his grandma’s house, including his grandma’s favorite clock.
Invisibility
Conor got ignored by everyone in the school. His classmates don't talk to him and his teacher skip him when asking questions.
The Heal Is A Lie
Conor’s mum told him that the medicine was not working, but he thought the monster is here to heal his mom, so he ask why is the monster here, and the monster say it’s time for the fourth tale.
And No Mum For Ya
The monster forced conor to tell the truth and they went back to the hospital together and conor faced his mum’s death.`.split('\n');

for (let i = 0; i < episodes.length/2; i++) {
    episodesContainer.innerHTML += `
    <div class="episode pointingCursor">
        <h1 class="num">${i+1}</h1>
        <div class="info">
            <h2 class="title">${episodes[i*2]}</h2>
            <p class="description">${episodes[(i*2)+1]}</p>
        </div>
    </div>
    `;
}

// 
// episodes panel trigger
// 

const outerContainer = document.getElementById('episodesOuterContainer');
document.getElementById("playBtn").onclick = () => {
    outerContainer.hidden = false;
};

Array.from(document.getElementsByClassName("episode")).forEach((element) => {
    element.onclick = () => {
        outerContainer.hidden = true;
    }
});