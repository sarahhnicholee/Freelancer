const freelancers = [
    { name: "Slice", price: 25, occupation: "gardener" },
    { name: "Pressure", price: 51, occupation: "programmer" },
    { name: "Possibility", price: 43, occupation: "teacher" },
    { name: "Prism", price: 81, occupation: "teacher" },
    { name: "Impulse", price: 43, occupation: "teacher" },
    { name: "Spark", price: 76, occupation: "programmer" },
    { name: "Wire", price: 47, occupation: "teacher" },
    { name: "Goose", price: 72, occupation: "driver" },
  ];

console.log(freelancers)

const body = document.querySelector("body")
body.style.backgroundColor= "pink"

const topHeader= document.createElement("h1")
topHeader.textContent= "Freelancer Forum"
document.body.appendChild(topHeader)

const init=()=>{
    const outerSection = document.createElement("div");
    for (let i=0; i<freelancers.length; i++){
        setTimeout(()=>{
        // const avgTitle = document.createElement("h6");
        
        // const h3 = document.createElement("h3");
        // const infoDiv= document.createElement("div");
        // infoDiv.id= 'info'
        // const nameDiv= document.createElement("div");
        // nameDiv.id= 'name'
        // const occDiv= document.createElement("div");
        // occDiv.id= 'occupation'
        // const priceDiv= document.createElement("div");
        // priceDiv.id= 'price'
        // infoDiv.appendChild ('nameDiv');
        // h3.style.backgroundColor= "black";
        // h3.innerText= element.name;
        // h3.textContent= "Available freelancers:"
        const randIndex = Math.floor(Math.random()*freelancers.length)
        const randName = freelancers[randIndex]
        const element = freelancers[i];
        const title= document.createElement("h1");
       
        title.textContent= randName.name;
       
        outerSection.appendChild(title);
        document.body.appendChild(outerSection); 
    }, i*2000); 
     }   
    
}
init();


// avgTitle.textContent= `The average starting price is `
//         body.append(avgTitle)
