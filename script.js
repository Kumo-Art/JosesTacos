// Jose's Taco Truck
// The data is done. The page is not.

const truck = {
  name: "Jose's Taco Truck",
  tagline: "Same recipes, worse parking.",
  phone: "209-555-0147",
  soldOut: false
};

const special = {
  name: "Three birria tacos and a consome",
  price: 11.00,
  isFeatured: true
};

const schedule = [
  { day: "Monday", location: "Behind the laundromat on Pacific" },
  { day: "Tuesday", location: "Weber Ave, by the courthouse" },
  { day: "Wednesday", location: "Behind the laundromat on Pacific" },
  { day: "Thursday", location: "The lot on Hammer Lane" },
  { day: "Friday", location: "Victory Park, until we run out" }
];

const crew = ["Marisol", "Big Kevin", "Darnell"];

const todayIndex = 0;

// Your code goes below here.


console.log(document);

const heading = document.getElementById("truck-name");

console.log(heading);

heading.textContent = "Jose's Taco Truck"

const tagline = document.getElementById("tagline");

tagline.textContent = "Same recipes, worse parking."


function status(status) {

  let truckStatus = document.getElementById("status")

  if (truckStatus == false) {
    status.textContent = "Open now";
    status.classList.remove("closed");
  }

  status.textContent = "Sold out for today.";
  status.classList.add("closed");







}




const phone = document.getElementById("phone");

phone.textContent = "209-555-0147"






const specialName = document.getElementById("special-name");

specialName.textContent = "Three birria tacos and a consome"





function price(price) {

  let specialPrice = document.getElementById("special-price")
  specialPrice.textContent = `$(11.00)`
}
price(special.price)




const monday = document.getElementById("day1");

monday.textContent =  "Monday";

const pacific = document.getElementById("location1");

pacific.textContent = "Behind the laundromat on Pacific";


const tuesday = document.getElementById("day2");

tuesday.textContent =  "Tuesday";

const weber = document.getElementById("location2");

weber.textContent = "Weber Ave, by the courthouse";

const wednesday = document.getElementById("day3");

wednesday.textContent =  "Wednesday";

const laundromat = document.getElementById("location3");

laundromat.textContent =  "Behind the laundromat on Pacific";

const thursday = document.getElementById("day4");

thursday.textContent =  "Thursday";

const hammer = document.getElementById("location4");

hammer.textContent = "The lot on Hammer Lane";

const friday = document.getElementById("day5");

friday.textContent =  "Friday";

const victory = document.getElementById("location5");

victory.textContent = "Victory Park, until we run out";

