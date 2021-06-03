import { BikeInterface } from "./../interfaces/bike.interface";

export class Bike implements BikeInterface {
  bikeId: number;

  constructor(bikeId: number) {
    this.bikeId = bikeId;
  }

  getBikeId(): number {
    return this.bikeId;
  }
}
