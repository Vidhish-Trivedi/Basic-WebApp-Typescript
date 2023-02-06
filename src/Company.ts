import {faker} from "@faker-js/faker";

// Can use "export default" also. Then imoprt User from "./Company" ..... {In index.ts}.
export class Company{
    private name: string;
    private phrase: string;
    private location: {
        lat: number;
        lng: number;
    };

    constructor(){
        this.name = faker.company.name();
        this.phrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())};
    };

    public getName(): string {
        return(this.name);
    };

    public getCatchPhrase(): string {
        return(this.phrase);
    };

    public getLocation(): {lat: number, lng: number} {
        return(this.location);
    }
};
