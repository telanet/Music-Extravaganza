const singers = [
  {
    picURL: 'images/ali.jpg',
    name: 'Benard Ngetich',
    genre: 'Gospel music',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim eu ante vitae imperdiet.',
  },
  {
    picURL: 'images/papa.jpg',
    name: 'Japhet  Kiprono',
    genre: 'Country music',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum congue aliquam.',
  },
  {
    picURL: 'images/rodolfo.jpg',
    name: 'Sweet Star',
    genre: 'Local songs',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet accumsan turpis eget lacinia.',
  },
  {
    picURL: 'images/shvets.jpg',
    name: 'Faith Therui',
    genre: 'Secular music',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id vulputate magna.',
  },
  {
    picURL: 'images/sindre.jpg',
    name: 'Second Junior',
    genre: 'Kalenjin Music',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla semper sed eros vel sodales.',
  },
  {
    picURL: 'images/ali.jpg',
    name: 'Diamond Platinumz',
    genre: 'Bongo',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget dui quis urna laoreet ornare.',
  },
];

window.onload = () => {
  singers.forEach((lecture) => {
    document.querySelector('.singerscards').innerHTML += `
        <div class="card2">
            <img class="singerpic" src="${lecture.picURL}" alt="${lecture.name}">
            <div class="singer-info">
            <h3 class="singer-name">${lecture.name}</h3>
            <h4 class="singer-genre">${lecture.genre}</h4>
            <div class="grey-line"></div>
            <p class="singer-detail">${lecture.details}</p>
            </div>
        </div>`;
  });
  document.querySelector('.singerscards-preview').innerHTML = `
  <div class="card2">
      <img class="singerpic" src="${singers[0].picURL}" alt="${singers[0].name}">
      <div class="singer-info">
      <h3 class="singer-name">${singers[0].name}</h3>
      <h4 class="singer-genre">${singers[0].genre}</h4>
      <div class="grey-line"></div>
      <p class="singer-detail">${singers[0].details}</p>
      </div>
  </div>
  <div class="card2">
      <img class="singerpic" src="${singers[1].picURL}" alt="${singers[1].name}">
      <div class="singer-info">
      <h3 class="singer-name">${singers[1].name}</h3>
      <h4 class="singer-genre">${singers[1].genre}</h4>
      <div class="grey-line"></div>
      <p class="singer-detail">${singers[1].details}</p>
      </div>
  </div>`;
};

const menu = document.querySelector('.mobile-menu');
const list = document.querySelector('.mobile-menu-list');

function toggleMenu() {
  if (list.style.display === 'flex') {
    list.style.display = 'none';
    menu.innerHTML = '<img src=\'https://img.icons8.com/ios/50/000000/menu--v4.png\'/>';
  } else {
    list.style.display = 'flex';
    menu.innerHTML = '<img src=\'https://img.icons8.com/ios/50/000000/delete-sign--v1.png\'/>';
  }
}
menu.addEventListener('click', toggleMenu);

const desktopCards = document.querySelector('.singerscards');
const mobileCards = document.querySelector('.singerscards-preview');
const btn = document.querySelector('.more-btn');

function showCards() {
  if (desktopCards.style.display === 'grid') {
    desktopCards.style.display = 'none';
    mobileCards.style.display = 'block';
    btn.innerHTML = 'More <span> <i class="fa fa-angle-down"></i></span>';
  } else {
    mobileCards.style.display = 'none';
    desktopCards.style.display = 'grid';
    btn.innerHTML = 'Less <span> <i class="fa fa-angle-up"></i></span>';
  }
}

btn.addEventListener('click', showCards);