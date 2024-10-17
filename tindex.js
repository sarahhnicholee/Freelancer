const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];
//   const names= ["Dr. Slice", "Dr. Pressure", "Prof. Possibility", "Prof. Prism", "Dr. Ipulse", "Prof. Spark", "Dr. Wire", "Prof. Goose"]
//   const occupations= ["gardener", "programmer", "teacher", "driver"]
//   function randFreelancer(freelancers){
//     const newString = `${freelancers.name} is a ${freelancers.occupation}`;
//   }
//   console.log(randFreelancer)
console.log(freelancers)

const body = document.querySelector("body")
body.style.backgroundColor= "pink"

const init=()=>{
    const section = document.createElement("section");
    for (let i=0; i<freelancers.length; i++){
        const element = freelancers[i];
        const div= document.createElement("div");
        const h3 = document.createElement("h3");
        h3.style.backgroundColor= "pink";
        h3.innerText= element.name;
        // h3.innerText= element.price;
        // h3.innerText= element.occupation;
        const h4 = document.createElement("h4");
        h4.innerText= "$"+ element.price;
        div.append(h4)
        div.append(h3)
        section.append(div)      
    }
    body.append(section)
}

init();