function createCol(){
    const col = document.createElement('div');
    col.classList.add('col-12', 'col-md-6', 'col-lg-4');

    return col;
}

// CREO L'ARRAY DI OGGETTI 
const ourTeam = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg'
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg'
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg'
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg'
    }
    
];

// CICLO L'ARRAY
for (let i = 0; i < ourTeam.length; i++) {
    const membroDelTeam = ourTeam[i];
    console.log(`Nome: ${membroDelTeam.nome}`);
    console.log(`Ruolo: ${membroDelTeam.ruolo}`);
    console.log(`Foto: ${membroDelTeam.foto}`);
    console.log("------------------------"); // Separatore tra i membri del team
  }

// RECUPERO L'ELEMENTO NEL DOM DOVE METTERE LE INFO DEI MEMBRI
const members_container = document.getElementById('members-container');

// CICLO L'ARRAY
for (let i = 0; i < ourTeam.length; i++){

    const col = createCol();

    col.innerHTML = 
    `<div class = " text-center fs-4 card m-3 shadow-lg p-3 bg-orange text-white">
       <img src="./img/${ourTeam[i].foto}" alt="">
       <span class = "text-danger text-uppercase fs-4 mt-3">nome</span>${ourTeam[i].nome}<br> 
       <span class = "text-danger text-uppercase fs-4 mt-3">ruolo</span> ${ourTeam[i].ruolo}<br>
    </div>`;

    members_container.append(col);
}