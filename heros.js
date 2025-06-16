const theEternals = [
    { 
        name : "Ajak",
        skills : ["healing", "energy manipulation", "immortality"],
    },
    { 
        name : "Phastos",
        skills : ["combat", "superhuman reflexes", "healing"],
    },
    { 
        name : "Ikaris",
        skills : ["flying", "cosmic energy", "superhuman strength"],
    },
    { 
        name : "Sersi",
        skills : ["manipulation", "telepathy", "regeneration"],
    },
    { 
        name : "Thena",
        skills : ["teleportation", "superhuman strength", "regeneration"],
    },
];

// html markup 
const body = document.querySelector('body');

const heading = document.createElement('h1');
heading.textContent = "The Eternals - Hero Selector";
body.append(heading);

const availableSkills = document.createElement('p');
availableSkills.textContent = "Available skills listed here --> ";
body.append(availableSkills);

const resultParagraph = document.createElement('p');
body.append(resultParagraph);

//user input info
const UserinputPrompt = document.createElement('p');
UserinputPrompt.textContent = "What attribute skill are you looking for in your hero?";
body.append(UserinputPrompt);

const UserinputField = document.createElement('input');
UserinputField.type = "text";
body.append(UserinputField);



//array
//*troubleshooting - if segment is put after the button, info will not load until button is clicked, needs to be before
const allSkills = [];
theEternals.forEach(eternal => {
    eternal.skills.forEach(skill => {
        const skillExists = allSkills.find(existingSkill => existingSkill === skill);
        !skillExists && allSkills.push(skill);
    });
});

//lists the skills on homepage
availableSkills.textContent += allSkills.join(', ');

//button
const button = document.createElement('button');
button.textContent = "Search";
body.append(button);

button.onclick = function() {
    const inputSkill = UserinputField.value.toLowerCase(); //need to use toLowerCase otherwise webpage will not display skills *troubleshooting

    //forEach
    //prints which hero is best suited for the chosen attribute
    theEternals.forEach(character => {
        const hasSkill = character.skills.find(skill => skill.toLowerCase() === inputSkill); //toLowerCase also needs to be used here *troubleshooting
            hasSkill && (() => {
            const p = document.createElement('p');
            p.textContent = `${character.name} is skilled in ${inputSkill}. Choose your fate wisely...`;
            resultParagraph.append(p);
        })();
    });
};
