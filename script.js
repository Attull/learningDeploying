// var newArr = inventors.filter((val)=>{
//     return val.year >=1800 && val.year <1900
// })

// var newA =  inventors.map((val)=>{
//     return val.first + " " + val.last
// })

// var res = inventors.reduce((val, acc)=>{
//     return (val.passed - val.year) + acc
// },0)

var animals = [
    { name: "Jason", species:"rabbit"},
    { name: "Jessica", species:"dog"},
    { name: "Jacky", species:"owl"},
    { name: "Luke", species:"fish"},
    { name: "Junior", species:"rat"},
    { name: "Thomas", species:"cat"}
]

// var ans = animals.filter((val) =>{
//     return val.species == 'dog'
// })


// var ans1 = animals.map((val) =>{
//     return val.species
// })


var res = animals.slice(0,3).map((val)=>{
    return val.name
})

console.log(animals)
console.log(res)

const coordinates = [
    { x: 1, y: 2 }, 
    { x: 2, y: 3 }, 
    { x: 3, y: 4 }
  ];

  const ress  = coordinates.reduce((val,acc)=>{
    return val.x + acc
  },0)

 laptop.forEach((val)=>{
    console.log(`${val.model} + 'price is' + ${val.price}`)
  })

  const obj = {
    "name":'Atul',
    "class":'FSD'
  }

  for (key in obj){
    console.log(obj[key])
  }