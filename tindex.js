const freelancers = [
    { name: "Iggy", price: 25, occupation: "gardener" },
    { name: "Maddy", price: 51, occupation: "programmer" },
    { name: "Britt", price: 43, occupation: "teacher" },
    { name: "Angela", price: 81, occupation: "teacher" },
    { name: "Todd", price: 43, occupation: "teacher" },
    { name: "Mark", price: 76, occupation: "programmer" },
    { name: "Melony", price: 47, occupation: "teacher" },
    { name: "Adam", price: 72, occupation: "driver" },
  ];
const names= ['Gabby', 'Chandra', 'Kimberly', 'Bryan']
const occupations= ['banker', 'pipeliner', 'secretary', 'cop']

const body = document.querySelector('body')
body.style.backgroundColor= "pink"



// const topHeader= document.createElement("h1")
// topHeader.textContent= "Freelancer Forum"
// document.body.append(topHeader)

const table = document.querySelector('table');
const tableBody= document.querySelector('#tableBody');
// table.append(tableBody)
// body.append(table)


const init=()=>{
    const freelancerElements = freelancers.map((freelancer)=> {
      const newRow= document.createElement('tr');
      newRow.innerHTML=`
      <td>${freelancer.name}</td>
      <td>${freelancer.occupation}</td>
      <td>$${freelancer.price}</td>
      `;
      return newRow;
    });
    tableBody.replaceChildren(...freelancerElements);
  };



const addFreelancerIntervalId= setInterval(()=>{
  const randIndex = Math.floor(Math.random()*names.length);
  const randName = names[randIndex];
  const randOcc= occupations[Math.floor(Math.random()* occupations.length)];
  const randPrice = Math.floor(Math.random() * 100);
  // const randIPrice= Math.floor(Math.random()*freelancers.price)
  // const randPri= freelancers[randIPrice];
     
const newFreelancer={
  name: randName,
  occupation: randOcc,
  price: randPrice,

  
};

let sum= 438;
sum+= randPrice;
const avPrice= sum/ freelancers.length
console.log(`The av price for all the current freelancers is $${avPrice}`);
freelancers.push(newFreelancer);
init()

if (freelancers.length ===13){
  clearInterval(addFreelancerIntervalId);
}
},3000);
init()

// const sum= randPrice.reduce((total,price)=> total + price, 0);
// const avPrice= sum/ randPrice.length
// console.log('The av price is $${avPrice}');