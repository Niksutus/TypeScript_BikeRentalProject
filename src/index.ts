import { Bike } from "./classes/bike.class";
import { User } from "./classes/user.class";
import { BikeDatabase } from "./classes/bikeDatabase.class";

// Creating a database

const dataBase = new BikeDatabase([], []);

// Creating new bikes

const bike1 = new Bike(123);
const bike2 = new Bike(345);
const bike3 = new Bike(567);

// Creating users

const user1 = new User(32456, true);
const user1_MembershipPaid = user1.membershipPaid;

const user2 = new User(67890, false);
const user2_MembershipPaid = user2.membershipPaid;

// Adding the created bikes to the database

dataBase.addBike(bike1);
dataBase.addBike(bike2);
dataBase.addBike(bike3);

console.log("show the added bikes")
console.log(dataBase.showAvailableBikes());

// Borrowing the bike2 with user1 whose membership has been paid

dataBase.borrowBike(user1_MembershipPaid, bike2);

console.log("show that bike2 has been moved from availableBikes array after borrowing")
console.log(dataBase.showAvailableBikes())
console.log("show that bike2 has been moved to borrowedBikes after borrowing")
console.log(dataBase.showBorrowedBikes())

// Returning the bike2

dataBase.returnBike(bike2)

console.log("show that bike2 has been moved from borrowedBikes array after returning")
console.log(dataBase.showBorrowedBikes())
console.log("show that bike2 has been added again to availableBikes after returning")
console.log(dataBase.showAvailableBikes())

// Trying to return bike2 again

dataBase.returnBike(bike2);


// Trying to borrow a bike with user2 whose memebership has not been paid

dataBase.borrowBike(user2_MembershipPaid, bike1);
