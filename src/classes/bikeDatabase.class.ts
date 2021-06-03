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

  borrowBike(bike: Bike): void {
      for(let availableBike of this.availableBikes){
          if(bike === availableBike){
            
          }
      }
  }
}
