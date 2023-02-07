import {faker} from "@faker-js/faker";
import {Mappable} from "./CustomMap";

export class User implements Mappable{
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
    };

    // Method to display content on InfoWindow class.
    public markerContent(): string {
        return(`<h2>User: ${this.getName()}</h2><h4>Latitude: ${this.getLocation().lat}</h4><h4>Longitude: ${this.getLocation().lng}</h4>`);
    };
};
