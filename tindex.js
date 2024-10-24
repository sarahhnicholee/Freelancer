const freelancers = [
  { name: 'Slice', price: 25, occupation: 'gardener' },
  { name: 'Pressure', price: 51, occupation: 'programmer' },
  { name: 'Possibility', price: 43, occupation: 'teacher' },
  { name: 'Prism', price: 81, occupation: 'teacher' },
  { name: 'Impulse', price: 43, occupation: 'teacher' },
  { name: 'Spark', price: 76, occupation: 'programmer' },
  { name: 'Wire', price: 47, occupation: 'teacher' },
  { name: 'Goose', price: 72, occupation: 'driver' },
];

const names = ['Abby', 'Brian', 'Courtney', 'David'];
const occupations = ['server', 'nurse', 'clerk', 'designer'];

const body = document.querySelector('body');
body.style.backgroundColor = 'pink';

const table = document.querySelector('table');
const tableBody = document.querySelector('#table-body');

const topHeader = document.createElement('h1');
topHeader.textContent = 'Freelancer Forum';
document.body.appendChild(topHeader);

const init = () => {
  // First, we need to map through or loop through our freelancer array to render each freelancer
  const freelancerElements = freelancers.map((freelancer) => {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${freelancer.name}</td>
      <td>${freelancer.occupation}</td>
      <td>$${freelancer.price}</td>
    `;
    return newRow;
  });

  tableBody.replaceChildren(...freelancerElements);
};

const addFreelancerIntervalId = setInterval(() => {
  const randIndex = Math.floor(Math.random() * names.length);
  const randName = names[randIndex];
  const randOccupation =
    occupations[Math.floor(Math.random() * occupations.length)];
  const randPrice = Math.floor(Math.random() * 100);

  const newFreelancer = {
    name: randName,
    occupation: randOccupation,
    price: randPrice,
  };

  // console.log('new freelancer:', newFreelancer);
  freelancers.push(newFreelancer);
  init();

  // Clear setInterval once freelancers length is equal to max length
  if (freelancers.length === 13) {
    clearInterval(addFreelancerIntervalId);
  }
}, 3000);

init();
