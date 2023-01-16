// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// Step:

// 1. Creare l'array di oggetti con le informazioni fornite.

const members = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg',
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chef Editor',
        foto: 'Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg',
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'Walter Gordon	Office Manager	walter-gordon-office-manager.jpg',
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg',
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'Scott Estrada	Developer	scott-estrada-developer.jpg',
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg',
    }
];

// 2. Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

for (let i = 0; i < members.length; i++) {
    console.log(members[i]);

};
const membersContainer = document.getElementById('members-container');
membersContainer.innerHTML = members;
// 3. Stampare le stesse informazioni su DOM sottoforma di stringhe


