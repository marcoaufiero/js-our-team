const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];

  for(let i = 0; i < team.length; i++){

    let element = team[i];

    document.getElementById('box').innerHTML +=

    `
    <div class="col-12 col-md-4 col-sm-6 ">    
        <div class="card" style="width: 100%;">
            <img src="./assets/img/${element.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-name">${element.name}</h5>
                <p class="card-role">${element.role}</p>
            </div>
        </div>
    <div>
    
    `
  }