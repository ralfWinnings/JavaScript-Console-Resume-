let name = 'Gary Smith';

console.log(name.toUpperCase());

let field = 'Full Stack Developer/student';

console.log(field);

let description = 'Overcoming all my battles to become a fluent developer';

console.log(description);

let interest = ['Music', 'Basketball', 'Technology', 'physical exercise'];

console.log(interest);

let position = [
    {
        name: 'United States Army',
        title: 'Communications Specialist',
        description: 'Responsible for com satilites and other means of comunication. Instilation, and maintain.'
    },
    {
        name: 'TSU & SAE institute, TSU(Computer Sci) SAE(Audio Engineering)',
        title: 'Student',
        description: 'student and soldier',
    },
];

function displayPosition() {
    for (let i = 0; i < position.length; i++) {
        console.log('*Company:' + position[i].name);
        console.log('*Title:' + position[i].title);
        console.log('*Description:' + position[i].description);
    }
}

displayPosition();


let skills = [
    {
        name: 'Extreme Focus',
        isCool: true,
    },
    {
        name: 'Creativity',
        isCool: true,
    },
    {
        name: 'Good Memory',
        isCool: false,
    },
];

function displaySkills() {
    for (let i = 0; i < skills.length; i++) {
        if (skills[i].isCool == true) {
            console.log('Bam!:' + skills[i].name);
        } else {
            console.log('*' + skills[i].name);
        }
    }
}

displaySkills();