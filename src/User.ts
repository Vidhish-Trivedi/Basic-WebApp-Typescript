import {faker} from "@faker-js/faker";

// Can use "export default" also. Then imoprt User from "./User" ..... {In index.ts}.
export class User{
    private name: string;
    private location: {
        lat: number;
        lng: number;
    };

    constructor(){
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())};
    };

    public getName(): string {
        return(this.name);
    };

    public getLocation(): {lat: number, lng: number} {
        return(this.location);
    }
};
