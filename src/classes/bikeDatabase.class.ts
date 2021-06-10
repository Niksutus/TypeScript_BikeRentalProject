import { Bike } from "./bike.class";

export class BikeDatabase {
  availableBikes: Bike[] = [];
  borrowedBikes: Bike[] = [];

  constructor(availableBikes: Bike[], borrowedBikes: Bike[]){
    this.availableBikes = availableBikes
    this.borrowedBikes = borrowedBikes
  }

  addBike(bike: Bike): boolean {
    if (this.availableBikes.indexOf(bike) === -1) {
      this.availableBikes.push(bike);
      return true;
    } else {
      return false;
    }
  }

  showAvailableBikes(): Bike[] {
    return this.availableBikes;
  }

  showBorrowedBikes(): Bike[] {
    return this.borrowedBikes;
  }

  borrowBike(memebershipPaid: boolean, bike: Bike): void {
    if (memebershipPaid === true) {
      //the function checks if the memebership has been paid
      for (let availableBike of this.availableBikes) {
        if (bike === availableBike) {
          let indexOfBike = this.availableBikes.indexOf(bike);
          this.availableBikes.splice(indexOfBike, 1);
          this.borrowedBikes.push(bike);

          console.log(`You have successfully borrowed the bike with the id ${bike.bikeId}`);
          return;

        } else {
          console.log("This bike is not available for borrowing");
        }
      }
    }
    console.log("You don't currently have the right to borrow a bike")
    
  }

  returnBike(bike:Bike):void {
    for(let available of this.availableBikes){
      if(bike === available){
        return console.log("This bike has already been returned")
      } else {

        let indexOfBike = this.borrowedBikes.indexOf(bike);
        this.borrowedBikes.splice(indexOfBike, 1)
        this.availableBikes.push(bike);

        return console.log(`You have succesfully returned the bike ${bike.bikeId}`)

      }
    }
  }
}
