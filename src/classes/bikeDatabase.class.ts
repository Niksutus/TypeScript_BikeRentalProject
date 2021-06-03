import { Bike } from "./bike.class";

export class BikeDatabase {
  availableBikes: Bike[] = [];
  borrowedBikes: Bike[] = [];

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
    if ((memebershipPaid = true)) {
      //the function checks if the memebership has been paid
      for (let availableBike of this.availableBikes) {
        if (bike === availableBike) {
          let indexOfBike = this.availableBikes.indexOf(bike);
          this.availableBikes.splice(indexOfBike, 1);
          this.borrowedBikes.push(bike);

          console.log(`You have successfully borrowed the bike ${bike.bikeId}`);
          
        } else {
          console.log("This bike is not available for borrowing");
        }
      }
    } else {
      console.log("You don't currently have the right to borrow a bike")
    }
  }

  returnBike(bike:Bike):void {
    for(let available of this.availableBikes){
      if(bike === available){
        console.log("This bike has already been returned")
      } else {

        this.availableBikes.push(bike);
        let indexOfBike = this.borrowedBikes.indexOf(bike);
        this.borrowedBikes.splice(indexOfBike, 1)

        console.log(`You have succesfully returned the bike ${bike.bikeId}`)

      }
    }
  }
}
