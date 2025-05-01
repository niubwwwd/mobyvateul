const timeElement = document.getElementById('time');
const options = { year: 'numeric', month: 'numeric', day: 'numeric' };

function setClock() {
  const date = new Date();
  timeElement.innerHTML = `Czas: ${
    date.toTimeString().split(' ')[0]
  } ${date.toLocaleDateString('pl-PL', options)}`;
}

setClock();
setInterval(setClock, 1000);

if (/android/i.test(navigator.userAgent)) {
  document.querySelector('.bottom_bar').style.height = '70px';
}

const unfoldElement = document.querySelector('.info_holder');
unfoldElement.addEventListener('click', () => {
  unfoldElement.classList.toggle('unfolded');
});

// Ustawienie zdjęcia
document.querySelector('.id_own_image').style.backgroundImage =
  "url('https://cdn.discordapp.com/attachments/1043972584171110410/1367446231466639461/gosciu.png?ex=68149d0b&is=68134b8b&hm=42f173d81c0472e28ce4083e80a25ac5cf34e19cd97d653e1dbcabfc5c774889&')";

// Wstawienie danych
const setData = (id, value) => {
  const element = document.getElementById(id);
  if (element) element.innerHTML = value || '';
};

setData('name', 'MILOSZ');
setData('surname', 'CHADUK');
setData('nationality', 'POLSKIE');
setData('birthday', '08.01.2007');
setData('familyName', 'Chaduk');
setData('sex', 'Mężczyzna');
setData('fathersFamilyName', 'Chaduk');
setData('mothersFamilyName', 'Sider');
setData('birthPlace', 'Białystok');
setData('countryOfBirth', 'Polska');
setData(
  'adress',
  `ul. Wiśniowa 1<br>16-010 Jurowce`
);
setData('checkInDate', '02.04.2030');

// Generowanie PESELu
const [day, month, year] = '08.01.2007'.split('.').map((v) => parseInt(v, 10));
const adjustedMonth = year >= 2000 ? 20 + month : month;
const peselSuffix = '0295'; // dla mężczyzny
const pesel = `${year % 100}${adjustedMonth.toString().padStart(2, '0')}${day
  .toString()
  .padStart(2, '0')}${peselSuffix}7`;
setData('pesel', pesel);
