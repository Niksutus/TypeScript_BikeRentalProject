import { UserInterface } from './../interfaces/user.interface';

export class User implements UserInterface {
    userId: number
    membershipPaid: boolean

    constructor(userId: number, memebershipPaid: boolean){
        this.userId = userId,
        this.membershipPaid = memebershipPaid
    }
}