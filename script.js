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
