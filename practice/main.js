import createDoctor from "./doctorCreator.js"
console.log("hellow world")

//creates dr daves object by sedning these properties into the createDoctor factory function and setting that equal to dave.
let dave = createDoctor("Dr Dave", "footman", "420 dukesOHazard Road")
console.log(dave)

//

let BowWowKennels = []

const createPet = (name, breed) => {
    let newPet = {
        name: name,
        breed: breed
    }
    BowWowKennels.push(newPet)
return newPet
}

//BowWowKennels.push(newPet)
let yoda = createPet("YodaMan","Yorkie-Shitzu")
let dash = createPet("Dashila", "Yorkie")
let rufus = createPet("Dufus", "Mut")
console.log(yoda, dash, rufus)
console.log(BowWowKennels)
//console.log(dash)