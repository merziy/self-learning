// Object storing arrays
const philosophers = { 
    names: ["Plato, ", "Socrates, ", "Kiekergaard, ", "Heidegger, ", "Kant, ", "Hume, "],
    reason: ["because you like history", "because you like war", "because you deal in abstractions"]
};

// Random selector
let ranNum = (array) => 
    array[Math.floor(Math.random() * array.length)];

// Console message
const choice = () => {
    let message = "";
    for (let word in philosophers) {
        message += ranNum(philosophers[word]);
    }
    console.log(message);
}
choice();