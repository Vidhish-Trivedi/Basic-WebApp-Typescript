import {faker} from "@faker-js/faker";
import {Mappable} from "./CustomMap"; 

export class Company implements Mappable{
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
    };

    // Method to display content on InfoWindow class.
    public markerContent(): string {
        return(`<h2>Company: ${this.getName()}</h2><h3>Phrase: ${this.getCatchPhrase()}</h3><h4>Latitude: ${this.getLocation().lat}</h4><h4>Longitude: ${this.getLocation().lng}</h4>`);
    };
};
